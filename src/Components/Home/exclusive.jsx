import React from 'react';
import styles from "@/styles/home/exclusive.module.css";
import Image from 'next/image';

function Exclusive() {
    return (
        <div className={styles.ExclusiveWrapper}>
            <Image src="/Assets/images/bannerTxt.webp" width={2000} height={1000} className={styles.bannerTextImage} />
            <div className={styles.ExclusiveContent}>
                <div className={styles.EachExclusive}>
                    Hassle Free Installation
                </div>
                <div className={styles.EachExclusive} style={{color:'#fff',backgroundColor:'#474747'}}>
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
