import React from 'react';
import styles from "@/styles/home/followUs.module.css";
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import franchises1 from '../../../public/Assets/product/OurProduct2.webp';
import franchises2 from '../../../public/Assets/product/OurProduct1.webp';

function FollowUs() {

    const Images = [
        "/Assets/product/OurProduct1.webp",
        "/Assets/product/OurProduct2.webp",
        "/Assets/product/OurProduct3.webp",
        "/Assets/product/OurProduct4.webp",
        "/Assets/product/OurProduct5.webp",
        "/Assets/product/OurProduct6.webp",
        "/Assets/product/OurProduct7.webp",
        "/Assets/product/OurProduct8.webp",
    ]

    return (
        <div className={styles.followUsWrap}>
            <SectionHeader title='Follow Us On Instagram' desc='Stay connected and inspired! Follow us on Instagram for the latest trends, design inspiration, and exclusive offers. Join us today!' />
            <div className={styles.wrapper}>
                <div className={styles.topOval}></div>
                <div className={styles.stripW}>
                    {Images.map((image) => (
                        <div className={styles.stripItem}>
                            <Image src={image} className={styles.CarouselImage} alt='Image' width={1000} height={1000} />
                        </div>
                    ))}
                </div>
                <div className={styles.bottomOval}></div>
            </div>
        </div>
    );
}

export default FollowUs;