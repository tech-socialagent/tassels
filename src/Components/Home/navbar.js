import React, { useContext, useEffect, useState } from 'react';
import styles from "@/styles/home/navbar.module.css";
import Image from 'next/image';
import logo from '../../../public/Assets/images/logo.png';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { ActivePageContext } from '@/Context';
import { BsTelephoneFill } from 'react-icons/bs';

function Navbar() {

    const router = useRouter();
    const [isFixed, setIsFixed] = useState(false);
    const [menuBar, setMenuBar] = useState(false);
    const { activePage, setActivePage } = useContext(ActivePageContext)

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
        setActivePage(page === '' ? 'Home' : page);
        router.push(`/${page}`)
    }

    const handleLogoClick = (e) => {
        e.preventDefault();
        setMenuBar(false);
        setActivePage('Home');
        router.push('/');
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
                <Image src={logo} alt="logo image" className={styles.logo} onClick={handleLogoClick} />
                <div className={styles.MenusContainer}>
                    <div className={styles.Menus}>
                        <li onClick={(e) => handleNavigate(e, '')} style={{ borderBottom: activePage === "Home" ? '2px solid #fff' : '' }}>Home</li>
                        <Link href="/#products" style={{ textDecoration: 'none' }}>
                            <li onClick={() => setActivePage("Products")} style={{ borderBottom: activePage === "Products" ? '2px solid #fff' : '' }}>Products</li>
                        </Link>
                        <li onClick={(e) => handleNavigate(e, 'offers')} style={{ borderBottom: activePage === "offers" ? '2px solid #fff' : '' }}>Offers</li>
                        <Link href="/#faq" style={{ textDecoration: 'none' }}>
                            <li onClick={() => setActivePage("faq")} style={{ borderBottom: activePage === "faq" ? '2px solid #fff' : '' }}>FAQ's</li>
                        </Link>
                        <li onClick={(e) => handleNavigate(e, "ContactUs")} style={{ borderBottom: activePage === "ContactUs" ? '2px solid #fff' : '' }}>Contact Us</li>
                        <li onClick={(e) => handleNavigate(e, "Spacewood")} style={{ borderBottom: activePage === "Spacewood" ? '2px solid #fff' : '' }}>Spacewood</li>
                    </div>
                    <Link href='tel: +918049757757' style={{textDecoration: 'none', color: '#fff'}}>
                            <span><BsTelephoneFill /></span>
                    </Link>
                </div>
                <div className={styles.toggleBar}><span onClick={handleClick}><AiOutlineMenu /></span></div>
                <div className={styles.PhoneMenus} style={{ right: menuBar ? '0vh' : '-30vh' }}>
                    <li onClick={(e) => handleNavigate(e, '')} style={{ borderBottom: activePage === "Home" ? '2px solid #fff' : '' }}>Home</li>
                    <Link href="/#products" onClick={() => setMenuBar(false)} style={{ textDecoration: 'none' }}>
                        <li onClick={() => setActivePage("Products")} style={{ borderBottom: activePage === "Products" ? '2px solid #fff' : '' }}>Products</li>
                    </Link>
                    <li onClick={(e) => handleNavigate(e, 'offers')} style={{ borderBottom: activePage === "offers" ? '2px solid #fff' : '' }}>Offers</li>
                    <Link href="/#faq" onClick={() => setMenuBar(false)} style={{ textDecoration: 'none' }}>
                        <li onClick={() => setActivePage("faq")} style={{ borderBottom: activePage === "faq" ? '2px solid #fff' : '' }}>FAQ's</li>
                    </Link>
                    <li onClick={(e) => handleNavigate(e, "ContactUs")} style={{ borderBottom: activePage === "ContactUs" ? '2px solid #fff' : '' }}>Contact Us</li>
                    <li onClick={(e) => handleNavigate(e, "Spacewood")} style={{ borderBottom: activePage === "Spacewood" ? '2px solid #fff' : '' }}>Spacewood</li>
                    <span onClick={handleClick}><AiFillCloseCircle /></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;