import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from "@/styles/getQuoteMain.module.css";
import { FormDataContext, GetQuoteContext } from '@/Context';
import Image from 'next/image';
import QuoteBG from '../../public/Assets/stage1BG.webp';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import { OurProductData } from './content';
import { TiTick } from 'react-icons/ti';
import axios from 'axios';

function GetQuoteMain() {

    const router = useRouter();

    const { getQuote, setGetQuote } = useContext(GetQuoteContext);

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsFixed(scrollTop > 35);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const {formData, setFormData} = useContext(FormDataContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.name !== '' && formData.email !== '' && formData.phone !== '') {
            setGetQuote('stage2')
        }
    }

    const handleDataSend = (event) => {
        event.preventDefault();

        console.log(process.env.NEXT_PUBLIC_DEMO_KEY);

        if(selectedProducts.length > 0) {
            const leadData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                products: JSON.stringify(selectedProducts),
            }

            axios.post('/api/zohoapi',leadData)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.error('Error sending data:', error);
            });

            setGetQuote('stage3')
        }
    }
    

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleProductSelect = (productId) => {
      if (selectedProducts.includes(productId)) {
        // Product is already selected, so unselect it
        setSelectedProducts(selectedProducts.filter((id) => id !== productId));
      } else {
        // Product is not selected, so select it
        setSelectedProducts([...selectedProducts, productId]);
      }
    };
        
    //Scrolling

    let scrl = useRef(null);

    const slide = (shift) => {
        const scrollOptions = {
            left: scrl.current.scrollLeft + shift,
            behavior: 'smooth'
          };
          scrl.current.scrollTo(scrollOptions);
    };

    const handleClose = (e) => {
        e.preventDefault();
        router.back();
        setGetQuote('stage1');
    }

    const handleFinish = (e) => {
        e.preventDefault();
        router.push("/");
        setGetQuote('stage1');
    }

    return (
        <div className={styles.GetQuoteMainWrap} style={{ marginTop: isFixed ? '73.5px' : '0px' }}>
            <div className={styles.GetQuoteMainContainer}>
                <span className={styles.CloseIcon} onClick={handleClose}><AiOutlineClose/></span>
                {
                    getQuote === 'stage0' &&
                    <div className={styles.GetQuoteStage1}>
                        <Image src={QuoteBG} className={styles.GetQuoteBackgroundImage} width={1000} height={1000} />
                        <h1>Thank you for Showing interest in Tassels. we’re excited to serve you.</h1>
                        <button className={styles.quoteBtn} onClick={() => setGetQuote('stage2')}>Start Now</button>
                    </div>
                }
                {
                    getQuote === 'stage1' &&
                    <form className={styles.quoteForm} onSubmit={handleSubmit}>
                        <div className={styles.quoteMenu}>
                            <label>Name</label>
                            <input type="text" placeholder='Enter Your Name' required name='name' value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className={styles.quoteMenu}>
                            <label>Email Address</label>
                            <input type="email" placeholder='Enter Your Email Address' required name='email' value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className={styles.quoteMenu}>
                            <label>Phone Number</label>
                            <input type="tel" placeholder='Enter Your Phone Number' required name='phone' value={formData.phone} onChange={handleInputChange} />
                        </div>
                        <button className={styles.quoteBtn} type='submit' style={{ marginTop: '3%' }}>Get Quote</button>
                    </form>
                }
                {
                    getQuote === 'stage2' &&
                    <div className={styles.GetQuoteStage3Wrap}>
                        <div className={styles.GetQuoteStage3Content}>
                            <h3>Which product of ours are you looking for?</h3>
                            <div className={styles.GetQuoteStage3}>
                                <div className={styles.GetQuoteStage3Left} onClick={() => slide(-250)}><span><IoIosArrowDropleftCircle /></span></div>
                                <div className={styles.GetQuoteProducts} ref={scrl}>
                                    {OurProductData.map((item,key) => (
                                        <div key={key} className={styles.GetQuoteSingleProduct}>
                                            <div className={styles.slectedProduct} style={{opacity: selectedProducts.includes(item.title) ? '1' : '0'}}><span><TiTick/></span></div>
                                            <Image src={item.img} onClick={() => handleProductSelect(item.title)} alt='ProductImage' width={1000} height={1000} className={selectedProducts.includes(item.title) ? styles.GetQuoteImageSelected : styles.GetQuoteImage} />
                                            <h2>{item.title}</h2>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.GetQuoteStage3Left} onClick={() => slide(+250)}><span><IoIosArrowDroprightCircle /></span></div>
                            </div>
                        </div>
                        <button className={styles.quoteBtn} onClick={handleDataSend} >Get Quote</button>
                    </div>
                }
                {
                    getQuote === 'stage3' &&
                    <div className={styles.GetQuoteStage1}>
                        <Image src={QuoteBG} className={styles.GetQuoteBackgroundImage} width={1000} height={1000} />
                        <h1>Thank you for all the inputs please check your email for the quotation.</h1>
                        <button className={styles.quoteBtn} onClick={handleFinish}>Home</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default GetQuoteMain;