import React, { useContext } from 'react';
import styles from "@/styles/home/icon.module.css"
import Image from 'next/image';
import { ProductContext } from '@/Context';
import { useRouter } from 'next/router';
import { AiFillCaretRight } from 'react-icons/ai'

function CurtainType() {

    const { setProduct } = useContext(ProductContext);
    const router = useRouter();

    const data = [
        {
            img: '/Assets/productImg/Curtains/Types/img1.webp',
            desc: 'Eyelet',
        },
        {
            img: '/Assets/productImg/Curtains/Types/img2.webp',
            desc: 'American pleats',
        },
        {
            img: '/Assets/productImg/Curtains/Types/img3.webp',
            desc: 'Ripple Stitching',
        },
        {
            img: '/Assets/productImg/Curtains/Types/img4.webp',
            desc: 'Box Pleats',
        },
        {
            img: '/Assets/productImg/Curtains/Types/img5.webp',
            desc: 'Honey Comb Pleats',
        },
    ]

    return (
        <div>
            <div className={styles.titleContainer}>
                <span><AiFillCaretRight /></span>
                <p> We also provide options for blackout, dim out curtains.</p>
            </div>
            <div className={styles.iconWrapperCurtain}>
                {data.map((item, id) => (
                    <div className={styles.CurtainTypeContainer}>
                        <div className={styles.singleIcon} key={id}>
                            <div className={styles.CurtainIconborder}></div>
                            <Image src={item.img} alt="img" className={styles.CurtainTypeImg} width={1000} height={1000} />
                        </div>
                        <span id='offers'>{item.desc}</span>
                    </div>
                ))
                }
                <h2>In addition, we offer customizations based on customers' preferences and designs, as long as they are feasible.</h2>
            </div>
        </div>
    );
}

export default CurtainType;