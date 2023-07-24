import React from 'react';
import styles from '@/styles/spacewood/TextImage.module.css';
import Image from 'next/image';
import ImageBg from '../../../public/Assets/spacewood/export.png';

function TextImage() {

    const data = [
        {
            title: "500Cr+",
            desc:"Gross Sales Revenue",
        },
        {
            title: "2000+",
            desc:"Skilled Work Force",
        },
        {
            title: "25 Acres+",
            desc:"Factory Distribution",
        }
    ]

    return ( 
        <div className={styles.TextImageContainer}>
            <h4>Spacewood</h4>
            <p>“INDIA'S LARGEST MANUFACTURER OF MODULAR FURNITURE”</p>
            <div className={styles.NumberTextContainer}>
                {
                    data.map((item) => (
                        <div className={styles.NumberText}>
                            <h5>{item.title}</h5>
                            <h6>{item.desc}</h6>
                        </div>
                    ))
                }
            </div>
            <Image src={ImageBg} width={1000} height={1000} className={styles.SpacewoodImage} />
        </div>
     );
}

export default TextImage;