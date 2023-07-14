import React from 'react';
import styles from '@/styles/home/OurProducts.module.css';
import SectionHeader from '../SectionHeader';

function OurProducts() {
    return ( 
        <div className={styles.OurProductsWrapper}>
            <SectionHeader title='Our Products' desc='Discover exquisite soft furnishing products on our website'/>
        </div>
     );
}

export default OurProducts;