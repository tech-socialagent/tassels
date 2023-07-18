import React from 'react';
import styles from "@/styles/home/franchises.module.css";
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import franchises1 from '../../../public/Assets/franchises1.webp';
import franchises2 from '../../../public/Assets/franchises2.webp';

function Franchises() {
    return ( 
        <div className={styles.franchisesWrapper}>
            <SectionHeader title='Our Franchises' desc='Spacewood, the leading modular furniture brand, provides holistic solutions for homes and offices with trend-setting designs and innovative creations.'/>
            <div className={styles.franchisesContainer}>
                <Image src={franchises2} alt="Image" width={1000} height={1000} className={styles.franchisesImage1}/>
                <Image src={franchises1} alt="Image" width={1000} height={1000} className={styles.franchisesImage2}/>
                <div className={styles.overlayText}>
                    a one stop facility to fulfill a lifestyle of your dreams
                </div>
            </div>  
        </div>
     );
}

export default Franchises;