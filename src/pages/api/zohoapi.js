import axios from 'axios';
import querystring from 'querystring';

export default async function handler(req, res) {
  const refreshToken = process.env.REFRESH_TOKEN;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const scope = 'ZohoCRM.modules.ALL';

  const tokenEndpoint = 'https://accounts.zoho.in/oauth/v2/token';
  const LeadEndpoint = 'https://www.zohoapis.in/crm/v2/Leads';

  const requestData = querystring.stringify({
    grant_type: 'refresh_token',
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    scope: scope
  });


  try {
    const response = await axios.post(tokenEndpoint, requestData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Handle the response data
    const accessToken = response.data.access_token;
    //Send Data to Zoho Leads

    axios
      .post(LeadEndpoint, req.body, {
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Lead created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating lead:', error.message);
      });

    // Return the response to the client
    return res.status(200).json("Lead created successfully");
  } catch (error) {
    // Handle errors
    console.error('Error getting access token:', error.response);
    return res.status(500).json({ error: 'Failed to get access token' });
  }
}

