import React from 'react';
import styles from "@/styles/home/exclusive.module.css";
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';

function Exclusive() {

    const slideImage = [
        '/Assets/banner/offer1.webp',
        '/Assets/banner/offer2.webp',
        '/Assets/banner/offer3.webp',
    ]

    return (
        <div className={styles.ExclusiveWrapper}>
            <Slide
                autoplay
                duration={3000}
                transitionDuration={1000}
                arrows={false}
            >
                {slideImage.map((item) => (
                    <Image src={item} width={2000} height={1000} className={styles.bannerTextImage} />
                ))}
            </Slide>
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
