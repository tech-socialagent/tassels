import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {

  const leadData = req.body

  const refreshToken = process.env.REFRESH_TOKEN;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const scope = 'ZohoCRM.modules.ALL';

  // Request a new access token
  const tokenData = qs.stringify({
    'refresh_token': refreshToken,
    'client_id': clientId,
    'client_secret': clientSecret,
    'grant_type': 'refresh_token'
  });

  const tokenConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://accounts.zoho.in/oauth/v2/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: tokenData
  };

  try {
    const tokenResponse = await axios.request(tokenConfig);
    const accessToken = tokenResponse.data.access_token;

    // Data to send
    const newLead = {
      "data": [
        {
          "Last_Name": leadData.name,
          "Email": leadData.email,
          "Phone": leadData.phone,
          "Description": leadData.products,
        }
      ]
    };

    // Send data to Zoho CRM
    const sendDataConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://www.zohoapis.in/crm/v2/Leads',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data: newLead
    };

    try {
      const sendDataResponse = await axios.request(sendDataConfig);
      console.log('Data sent successfully:', sendDataResponse.data);
      res.status(200).json({ message: 'Data has been successfully sent' });
    } catch (sendDataError) {
      console.log('Error sending data:', sendDataError.response.data);
      res.status(400).json({ error: 'Error sending data to Zoho CRM' });
    }
  } catch (tokenError) {
    console.log('Error getting access token:', tokenError.response.data);
    res.status(400).json({ error: 'Error getting access token' });
  }
}
