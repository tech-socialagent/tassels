import React, { useEffect, useState } from 'react';
import styles from "@/styles/home/navbar.module.css";
import Image from 'next/image';
import logo from '../../../public/Assets/images/logo.png';

function Navbar() {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsFixed(scrollTop > 35);
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const data = [
        {
            type: "WhatsApp",
            content: '+91 9886066184'
        },
        {
            type: "Call",
            content: '080-49757757'
        },
        {
            type: "Email",
            content: 'info@tasselsinterior.com'
        }
    ]

    return (
        <div className={styles.NavbarConainer}>
            <div className={styles.NavbarTop}>
                {data.map((item) => (
                    <div className={styles.Element}>
                        <span className={styles.Type}>{item.type} : </span>
                        <span className={styles.Content}>{item.content}</span>
                    </div>
                ))}
            </div>
            <div className={isFixed ? styles.fixedNavbar : styles.NavbarBottom}>
                    <Image src={logo} alt="logo image" className={styles.logo}/>
                    <div className={styles.Menus}>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Offers</li>
                            <li>FAQ's</li>
                            <li>Contact Us</li>
                            <li>Spacewood</li>
                    </div>
            </div>
        </div>
    );
}

export default Navbar;