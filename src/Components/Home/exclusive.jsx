import React from 'react';
import styles from "@/styles/home/exclusive.module.css";
import SliderComponent from '../slider';
import { useRouter } from 'next/router';

function Exclusive() {

    const router = useRouter();

    const slideImage = [
        '/Assets/offers/banner1.webp',
        '/Assets/offers/banner3.webp',
        '/Assets/offers/banner2.webp',
        '/Assets/offers/banner4.webp',
    ]

    return (
        <div className={styles.ExclusiveWrapper}>
            <div  onClick={() => router.push('/offers')} style={{cursor:'pointer'}}>
                <SliderComponent slideImage={slideImage}/>
            </div>
            <div className={styles.ExclusiveContent} id='products'>
                <div className={styles.EachExclusive}>
                    Hassle Free Installation
                </div>
                <div className={styles.EachExclusiveCenter}>
                    Free Delivery
                </div>
                <div className={styles.EachExclusive}>
                    Exclusive Deals
                </div>
            </div>
        </div>
    );
}

export default Exclusive;
