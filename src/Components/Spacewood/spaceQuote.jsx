import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/spacewood/spaceQuote.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import spaceLogo from '../../../public/Assets/spacewood/spacewoodLogo.webp'
import squareImage from '../../../public/Assets/spacewood/squarebanner.webp'
import stage3BG from '../../../public/Assets/spacewood/stage3BG.webp'
import { AiOutlineLeft } from 'react-icons/ai';
import { FormDataContext } from '@/Context';
import axios from 'axios';

function SpaceQuote() {

    const router = useRouter();
    const [stage, setStage] = useState('stage1');
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsFixed(scrollTop > 35);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const requirements = [
        "Kitchen",
        "Wardrobe",
        "Study Unit",
        "Entertainment Unit",
        "Others"
    ]

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleClick = (productId) => {
        if (selectedProducts.includes(productId)) {
            // Product is already selected, so unselect it
            setSelectedProducts(selectedProducts.filter((id) => id !== productId));
        } else {
            // Product is not selected, so select it
            setSelectedProducts([...selectedProducts, productId]);
        }
    }

    const handleStage1 = (e) => {
        e.preventDefault();

        if (selectedOption !== '' && selectedProducts.length > 0) {
            setStage('stage2');
        }
    }

    const {formData, setFormData} = useContext(FormDataContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStage2 = (e) => {
        e.preventDefault();
        const leadData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            products: `Home Type : ${selectedOption}, Requirements :${JSON.stringify(selectedProducts)}`,
        }

        console.log(leadData);

        axios.post('/api/zohoapi', leadData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
        setStage('stage3');

    }

    return (
        <div className={styles.SpaceQuoteContainer} style={{ marginTop: isFixed ? '73.5px' : '0px' }}>
            <div className={styles.SpaceQuoteTop}>
                <Image src={spaceLogo} alt='img' width={1000} height={1000} className={styles.LogoImage} />
            </div>
            <div className={styles.SpaceQuoteBottomContainer}>
                <h2>Lets get Started</h2>
                <p>inviting spaces for your dream home interior</p>
                {stage === 'stage1' && <div className={styles.SpaceQuoteBottom}>
                    <form onSubmit={handleStage1} className={styles.QuoteForm}>
                        <label>Home Type</label>
                        <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                            <option value="" disabled selected>Select an option</option>
                            <option value='1BHK'>1BHK</option>
                            <option value='2BHK'>2BHK</option>
                            <option value='3BHK'>3BHK</option>
                            <option value='4BHK'>4BHK</option>
                        </select>
                        <label>Your Requirements</label>
                        {requirements.map((item) => (
                            <div className={selectedProducts.includes(item) ? styles.menuSelected : styles.menu}>
                                <input type="checkbox" checked={selectedProducts.includes(item) ? true : false} id={item} value={item} onChange={(event) => handleClick(event.target.value)} />
                                <label htmlFor={item}>{item}</label>
                            </div>
                        ))}
                        <button type='submit'>Next</button>
                    </form>
                    <div className={styles.formImageContainer}>
                        <Image src={squareImage} alt='img' width={500} height={500} className={styles.FormImage} />
                    </div>
                </div>}
                {stage === 'stage2' && <div className={styles.SpaceQuoteBottom}>
                    <div className={styles.backButtonContainer}>
                        <h3><span onClick={() => setStage('stage1')}><AiOutlineLeft /></span>Enter Your Details</h3>
                        <form onSubmit={handleStage2} className={styles.QuoteForm}>
                            <div className={styles.stage2Menu}>
                                <label>Name</label>
                                <input type="text" placeholder='Enter Your Name' required  name='name' value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className={styles.stage2Menu}>
                                <label>Email Address</label>
                                <input type="email" placeholder='Enter Your Email' required  name='email' value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className={styles.stage2Menu}>
                                <label>Phone Number</label>
                                <input type="tel" placeholder='Enter Your phone number' required  name='phone' value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <button type='submit'>Get Quote</button>
                        </form>
                    </div>
                    <div className={styles.formImageContainer}>
                        <Image src={squareImage} alt='img' width={500} height={500} className={styles.FormImage} />
                    </div>
                </div>}
                {stage === 'stage3' && <div className={styles.SpaceQuoteStage3}>
                    <Image src={stage3BG} alt='image' width={1000} height={1000} className={styles.stage3Image} />
                    <div className={styles.stage3Content}>
                        <h1>We appreciate the inputs, and our team will be in contact with you soon</h1>
                        <button className={styles.stage3Button} onClick={() => router.push('/')}>HOME</button>
                    </div>
                    <div className={styles.overlay}></div>
                </div>}
            </div>
        </div>
    );
}

export default SpaceQuote;