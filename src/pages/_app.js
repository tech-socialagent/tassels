import { ProductContext } from '../Context.js';
import '@/styles/globals.css'
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const [product, setProduct] = useState('Interiors')

  return (
    <ProductContext.Provider value={{product, setProduct}} >
      <Component {...pageProps} />
    </ProductContext.Provider>
  );
}
