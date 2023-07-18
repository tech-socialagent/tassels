import React, { useContext, useState } from 'react';
import styles from "@/styles/home/getQuote.module.css";
import SectionHeader from '../SectionHeader';
import { FormDataContext } from '@/Context';

function GetQuote() {

    const { formData, setFormData } = useContext(FormDataContext)
    const [ tempData, setTempData ] = useState({
        name:'',
        email:'',
        phone:'',
    })
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTempData({ ...tempData, [name]: value });
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        setTempData({
            name:'',
            email:'',
            phone:'',
        })
    }

    return ( 
        <div className={styles.quoteWrapper}>
            <SectionHeader title='Get Quote' desc='Transform your space with a personalized touch. Get a quote and let our experts take care of the rest!'/>
            <div className={styles.quoteContainer}>
                <form className={styles.quoteForm} onSubmit={handleSubmit}>
                    <div className={styles.quoteMenu}>
                        <label>Name</label>
                        <input type="text" placeholder='Enter Your Name' required name='name' value={tempData.name} onChange={handleInputChange}/>
                    </div>
                    <div className={styles.quoteMenu}>
                        <label>Email Address</label>
                        <input type="text" placeholder='Enter Your Email Address' required name='email' value={tempData.email} onChange={handleInputChange}/>
                    </div>
                    <div className={styles.quoteMenu}>
                        <label>Phone Number</label>
                        <input type="text" placeholder='Enter Your Phone Number' required name='phone' value={tempData.phone} onChange={handleInputChange}/>
                    </div>
                    <button type='submit'>Get Quote</button>
                </form>
            </div>
        </div>
     );
}

export default GetQuote;