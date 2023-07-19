import { FormDataContext, GetQuoteContext, ProductContext } from '../Context.js';
import '@/styles/globals.css'
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const [product, setProduct] = useState('Interiors');
  const [getQuote, setGetQuote] = useState('stage1');
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      phone: '',
    }
  )

  console.log(formData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      <GetQuoteContext.Provider value={{ getQuote, setGetQuote }}>
        <ProductContext.Provider value={{ product, setProduct }} >
          <Component {...pageProps} />
        </ProductContext.Provider>
      </GetQuoteContext.Provider>
    </FormDataContext.Provider>
  );
}
