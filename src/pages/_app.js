import { FormDataContext, GetQuoteContext, ProductContext, ActivePageContext } from '../Context.js';
import '@/styles/globals.css'
import Script from 'next/script.js';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router.js';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const [activePage, setActivePage] = useState("Home");
  const [product, setProduct] = useState('Interiors');
  const [getQuote, setGetQuote] = useState('stage1');
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      phone: '',
    }
  )


  const currentPath = router.pathname;
  const isOpenProductPage = currentPath === '/product';

  useEffect(() => {
    setActivePage(isOpenProductPage ? 'Products' : activePage);
  }, [currentPath])

  return (
    <>
      <Script type="text/javascript" id="zsiqchat" dangerouslySetInnerHTML={{
        __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq6e77d52d184f5ad049c510d85db11e945a5e13959eec8705e0c2fbf9a94c31d3", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`
      }} />
      <ActivePageContext.Provider value={{ activePage, setActivePage }}>
        <FormDataContext.Provider value={{ formData, setFormData }}>
          <GetQuoteContext.Provider value={{ getQuote, setGetQuote }}>
            <ProductContext.Provider value={{ product, setProduct }} >
              <Component {...pageProps} />
            </ProductContext.Provider>
          </GetQuoteContext.Provider>
        </FormDataContext.Provider>
      </ActivePageContext.Provider >
    </>
  );
}
