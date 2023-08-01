import React, { useContext } from 'react';
import styles from "@/styles/home/icon.module.css"
import Image from 'next/image';
import { ProductContext } from '@/Context';
import { useRouter } from 'next/router';

function Icon() {

    const { setProduct } = useContext(ProductContext);
    const router = useRouter();

    const data = [
        {
            hover: '/Assets/images/hover/icon1.png',
            img: '/Assets/images/icon1.png',
            desc: 'Curtains',
        },
        {
            hover: '/Assets/images/hover/icon2.png',
            img: '/Assets/images/icon2.png',
            desc: 'Rugs',
        },
        {
            hover: '/Assets/images/hover/icon3.png',
            img: '/Assets/images/icon3.png',
            desc: 'Blinds',
        },
        {
            hover: '/Assets/images/hover/icon6.png',
            img: '/Assets/images/icon6.png',
            desc: 'Furniture',
        },
        {
            hover: '/Assets/images/hover/icon5.png',
            img: '/Assets/images/icon5.png',
            desc: 'Upholstery',
        },
    ]

    const handleClick = (e, title) => {
        e.preventDefault();

        setProduct(title);
        router.push('/product');
    }

    return (
        <div className={styles.iconWrapper}>
            {data.map((item,id) => (
                <div className={styles.singleIcon} key={id} onClick={(e) => handleClick(e,item.desc)}>
                    <div className={styles.Iconborder}></div>
                    <Image src={item.img} alt="img" className={styles.icon} width={500} height={500}/>
                    <Image src={item.hover} alt="img" className={styles.icon1} width={500} height={500}/>
                    <span id='offers'>{item.desc}</span>
                </div>
            ))
            }
        </div>
    );
}

export default Icon;