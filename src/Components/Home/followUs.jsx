import React from 'react';
import styles from "@/styles/home/followUs.module.css";
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import franchises1 from '../../../public/Assets/franchises1.webp';

function FollowUs() {

    const Images = [
        franchises1,
        franchises1,
        franchises1,
        franchises1,
        franchises1,
        franchises1,
        franchises1,
        franchises1,
        franchises1,
        franchises1,
    ]

    return (
        <div className={styles.followUsWrap}>
            <SectionHeader title='Follow Us On Instagram' desc='Stay connected and inspired! Follow us on Instagram for the latest trends, design inspiration, and exclusive offers. Join us today!' />
            <div className={styles.wrapper}>
                <div className={styles.topOval}></div>
                <div className={styles.stripW}>
                    {Images.map(() => (
                        <div className={styles.stripItem}>
                            <Image src={franchises1} className={styles.CarouselImage} alt='Image' width={1000} height={1000} />
                        </div>
                    ))}
                </div>
                <div className={styles.bottomOval}></div>
            </div>
        </div>
    );
}

export default FollowUs;