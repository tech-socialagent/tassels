import React from 'react';
import styles from "@/styles/home/exclusive.module.css";
import { useRouter } from 'next/router';
import { Slide } from 'react-slideshow-image';
import Image from 'next/image';

function Exclusive() {

    const router = useRouter();

    const slideImage = [
        '/Assets/offers/banner1.webp',
        '/Assets/offers/banner3.webp',
        '/Assets/offers/banner2.webp',
        '/Assets/offers/banner4.webp',
    ]

    const slideImagePhone = [
        '/Assets/offers/Artboard1.webp',
        '/Assets/offers/Artboard2.webp',
        '/Assets/offers/Artboard3.webp',
        '/Assets/offers/Artboard4.webp',
    ]


    return (
        <div className={styles.ExclusiveWrapper}>
            <div onClick={() => router.push('/offers')} style={{ cursor: 'pointer' }}>
                <div className={styles.bannerDesktop}>
                    <Slide
                        autoplay
                        duration={3000}
                        transitionDuration={1000}
                        arrows={false}
                        pauseOnHover={false}
                    >
                        {slideImage.map((item) => (
                            <Image src={item} width={2000} height={1000} className={styles.bannerTextImage} />
                        ))}
                    </Slide>
                    </div>
                    <div className={styles.bannerMobile}>
                    <Slide
                        autoplay
                        duration={3000}
                        transitionDuration={1000}
                        arrows={false}
                        pauseOnHover={false}
                    >
                        {slideImagePhone.map((item) => (
                            <Image src={item} width={2000} height={1000} className={styles.bannerTextImage} />
                        ))}
                    </Slide>
                </div>
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
