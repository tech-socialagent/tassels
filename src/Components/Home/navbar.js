import React, { useEffect, useState } from 'react';
import styles from "@/styles/home/navbar.module.css";
import Image from 'next/image';
import logo from '../../../public/Assets/images/logo.png';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';

function Navbar() {

    const router = useRouter();
    const [isFixed, setIsFixed] = useState(false);
    const [menuBar, setMenuBar] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsFixed(scrollTop > 35);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        setMenuBar(!menuBar);
    }

    const handleNavigate = (e, page) => {
        e.preventDefault();
        setMenuBar(false);
        router.push(`/${page}`)
    }

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
                {data.map((item, index) => (
                    <div className={styles.Element} key={index}>
                        <span className={styles.Type}>{item.type} : </span>
                        <span className={styles.Content}>{item.content}</span>
                    </div>
                ))}
            </div>
            <div className={isFixed ? styles.fixedNavbar : styles.NavbarBottom}>
                <Image src={logo} alt="logo image" className={styles.logo} onClick={() => router.push('/')}/>
                <div className={styles.Menus}>
                    <li onClick={(e) => handleNavigate(e, '')}>Home</li>
                    <Link href="/#products" style={{ textDecoration: 'none' }}>
                        <li>Products</li>
                    </Link>
                    <Link href="/#offers" style={{ textDecoration: 'none' }}>
                        <li>Offers</li>
                    </Link>
                    <Link href="/#faq" style={{ textDecoration: 'none' }}>
                        <li>FAQ's</li>
                    </Link>
                    <li onClick={(e) => handleNavigate(e, "ContactUs")}>Contact Us</li>
                    <li onClick={(e) => handleNavigate(e, "Spacewood")}>Spacewood</li>
                </div>
                <div className={styles.toggleBar}><span onClick={handleClick}><AiOutlineMenu /></span></div>
                <div className={styles.PhoneMenus} style={{ right: menuBar ? '0vh' : '-30vh' }}>
                    <li onClick={(e) => handleNavigate(e, '')}>Home</li>
                    <Link href="/#products" style={{ textDecoration: 'none' }}>
                        <li>Products</li>
                    </Link>
                    <Link href="/#offers" style={{ textDecoration: 'none' }}>
                        <li>Offers</li>
                    </Link>
                    <Link href="/#faq" style={{ textDecoration: 'none' }}>
                        <li>FAQ's</li>
                    </Link>
                    <li onClick={(e) => handleNavigate(e, "ContactUs")}>Contact Us</li>
                    <li onClick={(e) => handleNavigate(e, "Spacewood")}>Spacewood</li>
                    <span onClick={handleClick}><AiFillCloseCircle /></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;