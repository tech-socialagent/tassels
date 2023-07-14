import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '@/styles/home/header.module.css';
import Image from 'next/image';

function Header() {

    const bannerContent = [
        {
            title: `FLOORINGS`,
            desc: `Upgrade Your Home's Aesthetics with an Array of Gorgeous Flooring Options to Suit Your Style and Budget`,
            img: '/Assets/banner/banner1.webp',
        },
        {
            title: `Second`,
            desc: `Upgrade Your Home's Aesthetics with an Array of Gorgeous Flooring Options to Suit Your Style and Budget`,
            img: '/Assets/banner/banner2.webp',
        },
        {
            title: `Third`,
            desc: `Upgrade Your Home's Aesthetics with an Array of Gorgeous Flooring Options to Suit Your Style and Budget`,
            img: '/Assets/banner/banner3.webp',
        },
        {
            title: `Fourth`,
            desc: `Upgrade Your Home's Aesthetics with an Array of Gorgeous Flooring Options to Suit Your Style and Budget`,
            img: '/Assets/banner/banner4.webp',
        },
    ]

    return (
        <div className={styles.SectionWrap} id='home'>
            <Zoom scale={1.01} arrows={false} autoplay duration={3500} transitionDuration={1500}>
                {bannerContent.map((item, index) => (
                    <div key={index} className={styles.banner}>
                        <Image width={1000} height={1000} className={styles.bannerImage} src={item.img} alt="image" />
                        <div className={styles.overlay}></div>
                        <div className={styles.content}>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <button>Get Quote</button>
                        </div>
                    </div>
                ))}
            </Zoom>
        </div>
    );
}

export default Header;