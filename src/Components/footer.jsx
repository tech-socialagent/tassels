import React, { useState } from 'react';
import styles from '@/styles/footer.module.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../public/Assets/images/logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

function TasselsFooter() {

    const router = useRouter();
    const [email, setEmail ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        
        setEmail('')
    }

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <Image src={logo} alt='Image' width={1000} height={1000} className={styles.footerLogo} />
                <div className={styles.footerContent}>
                    <div className={styles.footerLeft}>
                        <p>
                            We at TASSELS believe in crafting products that transform bricks and mortar structures into cozy and welcoming spaces. Tassels has successfully reimagined several homes over the last 12 years .
                        </p>
                        <div className={styles.socialIcons}>
                            <li><FaFacebookSquare /></li>
                            <li><FaTwitterSquare /></li>
                            <li><FaInstagramSquare /></li>
                            <li><FaLinkedin /></li>
                        </div>
                    </div>
                    <div className={styles.footerPhone}>
                        <div className={styles.footerMiddle}>
                            <div className={styles.footerMiddleContainer}>
                                <div className={styles.footerTitle}>Quick Links</div>
                                <ul>
                                    <li onClick={() => router.push('/')}>Homepage</li>
                                    <Link href="/product#AboutUs" style={{textDecoration:'none'}}>
                                        <li>About Us</li>
                                    </Link>
                                    <Link href="/#products" style={{textDecoration:'none'}}>
                                        <li>Products</li>
                                    </Link>
                                    <Link href="/#offers" style={{textDecoration:'none'}}>
                                        <li>Offers</li>
                                    </Link>
                                    <li onClick={() => router.push('/ContactUs')}>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footerRight}>
                            <div className={styles.footerTitle}>News Letter</div>
                            <form className={styles.footerForm} onSubmit={handleSubmit}>
                                <input type='email' placeholder='Enter Your Email Address Here' requied value={email.toString()} onChange={(e) => setEmail(e.target.value)}/>
                                <button type='submit'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                <span>Cookies & Policies</span>
                <span>©2023, Tassels, all rights reserved </span>
            </div>
        </div>
    );
}

export default TasselsFooter;