import React, { useEffect, useState } from 'react';
import styles from '@/styles/offers/offersMain.module.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from 'next/image';
import bannerImage from '../../../public/Assets/offers/offerPageBanner.webp';
import { useRouter } from 'next/router';
import SliderComponent from '../slider';

function OffersMain() {

    const router = useRouter();

    const DisplayImage = [
        '/Assets/offers/offer1.webp',
        '/Assets/offers/offer2.webp',
        '/Assets/offers/offer3.webp',
        '/Assets/offers/offer4.webp',
        '/Assets/offers/offer5.webp',
        '/Assets/offers/offer6.webp',
        '/Assets/offers/offer7.webp',
        '/Assets/offers/offer8.webp',
        '/Assets/offers/offer9.webp',
    ]

    const slideImage = [
        '/Assets/banner/offer1.webp',
        '/Assets/banner/offer2.webp',
        '/Assets/banner/offer3.webp',
    ]

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
        <div className={styles.offerContainer} style={{ marginTop: isFixed ? '73.5px' : '0px' }}>
            <SliderComponent slideImage={slideImage} />
            <div className={styles.ImageContainer}>
                {
                    DisplayImage.map((item, index) => (
                        <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                            <Image src={item} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                            <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                            <div className={styles.overlay}></div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.offerSection}>
                <Image src={bannerImage} width={1000} height={1000} alt='image' className={styles.offerSectionImage} />
                <div className={styles.offerSectionRight}>
                    <h1><span> Huge deals</span> on curtains, wallpaper, and cushions. Limited time offer!</h1>
                    <button onClick={() => router.push('/getQuote')} className={styles.offerSectionButton}>Get Quote</button>
                </div>
            </div>
        </div>
    );
}

export default OffersMain;