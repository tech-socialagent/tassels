import React from 'react';
import styles from "@/styles/home/icon.module.css"
import Image from 'next/image';

function Icon() {

    const data = [
        {
            img: '/Assets/images/icon1.png',
            desc: 'Curtains',
        },
        {
            img: '/Assets/images/icon2.png',
            desc: 'Rugs',
        },
        {
            img: '/Assets/images/icon3.png',
            desc: 'Blinds',
        },
        {
            img: '/Assets/images/icon4.png',
            desc: 'Mattress',
        },
        {
            img: '/Assets/images/icon5.png',
            desc: 'Upholstery',
        },
    ]

    return (
        <div className={styles.iconWrapper}>
            {data.map((item) => (
                <div className={styles.singleIcon}>
                    <div className={styles.Iconborder}></div>
                    <Image src={item.img} alt="img" className={styles.icon} width={500} height={500}/>
                    <span>{item.desc}</span>
                </div>
            ))
            }
        </div>
    );
}

export default Icon;