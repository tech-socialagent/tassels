import React, { useContext, useRef, useState } from 'react';
import styles from "@/styles/home/getQuote.module.css";
import SectionHeader from '../SectionHeader';
import { FormDataContext } from '@/Context';
import { OurProductData } from '../content';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';
import QuoteBG from '../../../public/Assets/stage1BG.webp';
import axios from 'axios';

function GetQuote() {

    const { formData, setFormData } = useContext(FormDataContext);
    const [stage, setStage] = useState('stage1');
    const [tempData, setTempData] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTempData({ ...tempData, [name]: value });
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setStage('stage2');
        setTempData({
            name: '',
            email: '',
            phone: '',
        })
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

    const handleDataSend = (event) => {
        event.preventDefault();
        if (selectedProducts.length > 0) {
            setFormData({
                ...formData,
                selected: selectedProducts
            })
            const leadData = {
                data: [
                    {
                        Last_Name: formData.name,
                        Email: formData.email,
                        Phone: formData.phone,
                    },
                ],
            };

            axios.post('/api/zohoapi', leadData)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Error sending data:', error);
                });
            setStage('stage3')
        }
    }

    return (
        <div className={styles.quoteWrapper}>
            <SectionHeader title='Get Quote' desc='Transform your space with a personalized touch. Get a quote and let our experts take care of the rest!' />
            <div className={styles.quoteContainer}>
                {stage === 'stage1' &&
                    <form className={styles.quoteForm} onSubmit={handleSubmit}>
                        <div className={styles.quoteMenu}>
                            <label>Name</label>
                            <input type="text" placeholder='Enter Your Name' required name='name' value={tempData.name} onChange={handleInputChange} />
                        </div>
                        <div className={styles.quoteMenu}>
                            <label>Email Address</label>
                            <input type="text" placeholder='Enter Your Email Address' required name='email' value={tempData.email} onChange={handleInputChange} />
                        </div>
                        <div className={styles.quoteMenu}>
                            <label>Phone Number</label>
                            <input type="text" placeholder='Enter Your Phone Number' required name='phone' value={tempData.phone} onChange={handleInputChange} />
                        </div>
                        <button type='submit'>Get Quote</button>
                    </form>
                }
                {
                    stage === 'stage2' &&
                    <div className={styles.GetQuoteStage3Wrap}>
                        <div className={styles.GetQuoteStage3Content}>
                            <h3>Which product of ours are you looking for?</h3>
                            <div className={styles.GetQuoteStage3}>
                                <div className={styles.GetQuoteStage3Left} onClick={() => slide(-250)}><span><IoIosArrowDropleftCircle /></span></div>
                                <div className={styles.GetQuoteProducts} ref={scrl}>
                                    {OurProductData.map((item, key) => (
                                        <div key={key} className={styles.GetQuoteSingleProduct}>
                                            <div className={styles.slectedProduct} style={{ opacity: selectedProducts.includes(item.title) ? '1' : '0' }}><span><TiTick /></span></div>
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
                    stage === 'stage3' &&
                    <div className={styles.GetQuoteStage1}>
                        <Image src={QuoteBG} className={styles.GetQuoteBackgroundImage} width={1000} height={1000} />
                        <h1>Thank you for All the inputs please check your email for the quotation.</h1>
                        <button className={styles.quoteBtn} onClick={() => setStage('stage1')}>Done</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default GetQuote;