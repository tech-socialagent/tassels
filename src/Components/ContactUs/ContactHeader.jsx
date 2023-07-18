import React, { useEffect, useState } from 'react';
import styles from '@/styles/ContactUs/ContactHeader.module.css';

function ContactHeader() {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsFixed(scrollTop > 35);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.ContactHeaderWrap} style={{ marginTop: isFixed ? '73.5px' : '0px' }}>
            <div className={styles.overlay}></div>
            <div className={styles.HeaderContent}>
                <h1>Connect with Us to Elevate Your <span>Living Spaces</span></h1>
                <ul>
                    <li>Interiors </li>
                    <li>Curtains</li>
                    <li>Blinds</li>
                    <li>Wallpapers</li>
                    <li>Flooring</li>
                </ul>
            </div>
        </div>
    );
}

export default ContactHeader;