import React from 'react';
import styles from "@/styles/home/exclusive.module.css";
import { useRouter } from 'next/router';
import { Slide } from 'react-slideshow-image';
import Image from 'next/image';

function Exclusive() {

    const router = useRouter();

    const slideImage = [
        '/Assets/offers/bannerNew/bannerImg1.webp',
        '/Assets/offers/bannerNew/bannerImg3.webp',
        '/Assets/offers/bannerNew/bannerImg2.webp',
        '/Assets/offers/bannerNew/bannerImg4.webp',
        '/Assets/offers/bannerNew/bannerImg5.webp',
        '/Assets/offers/bannerNew/bannerImg6.webp',
        '/Assets/offers/bannerNew/bannerImg7.webp',
    ]

    const slideImagePhone = [
        '/Assets/offers/Artboard1.webp',
        '/Assets/offers/Artboard2.webp',
        '/Assets/offers/Artboard4.webp',
        '/Assets/offers/mobview1.webp',
        '/Assets/offers/mobview2.webp',
        '/Assets/offers/mobview3.webp',
        '/Assets/offers/mobview4.webp',
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
