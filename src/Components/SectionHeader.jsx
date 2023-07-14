import React from 'react';
import styles from '@/styles/SectionHeader.module.css';

function SectionHeader({title,desc}) {
    return (
        <div className={styles.OurProductsHeader}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    );
}

export default SectionHeader;