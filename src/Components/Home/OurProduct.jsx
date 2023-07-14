import React from 'react';
import styles from '@/styles/home/OurProducts.module.css';
import SectionHeader from '../SectionHeader';
import { OurProductData } from '../content';
import Image from 'next/image';

function OurProducts() {
    return (
        <div className={styles.OurProductsWrapper}>
            <SectionHeader title='Our Products' desc='Discover exquisite soft furnishing products on our website' />
            <div className={styles.OurProductContainer}>
                {OurProductData.map((item) => (
                    <div className={styles.SingleProduct}>
                        <h3><li>{item.title}</li></h3>
                        <p>{item.desc}</p>
                        <div className={styles.SingleProductImageContainer}>
                            <Image src={item.img} alt="image" width={1000} height={1000} className={styles.SingleProductImage}/>
                            <div className={styles.explore}>Explore more</div>
                            <div className={styles.overlay}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurProducts;