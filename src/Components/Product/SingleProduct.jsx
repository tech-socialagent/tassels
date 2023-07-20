import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/Product/singleProduct.module.css';
import { ProductContext } from '../../Context.js';
import { AiOutlineArrowRight, AiOutlineLeft } from 'react-icons/ai';
import { OurProductData } from '@/Components/content';
import { ProductImages,CushionImages } from '@/Components/content';
import Image from 'next/image';
import { useRouter } from 'next/router.js';

function SingleProduct() {

    const { product } = useContext(ProductContext);
    const router = useRouter();
    const Element = OurProductData.find((element) => element.title === product);
    const ElementImages = ProductImages.filter((data) => data.title === Element?.title);

    const [Btn, setBtn] = useState("SEE MORE");
    const [toShow, setToShow] = useState(9)

    const handleClick = (e) => {
        e.preventDefault();
        if(Btn == 'SEE MORE') {
            setToShow(ElementImages.length);
            setBtn("SEE LESS");
        }else{
            setToShow(9);
            setBtn("SEE MORE")
        }
    }

    const DisplayImage = ElementImages.slice(0, toShow)

    useEffect(() => {
        setToShow(9);
        setBtn("SEE MORE");
    },[product]);

    return (
        <div className={styles.singleProductWrap}>
            <div className={styles.pageTitle}>
                <span><AiOutlineLeft onClick={() => router.back()}/></span>
                <h2>Our Products</h2>
            </div>
            <div className={styles.pageContent}>
                <h3>{Element?.title}</h3>
                <p>{Element?.content}</p>
                <div className={styles.ImageContainer}>
                    {
                        DisplayImage.map((item, index) => (
                            <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image"/>
                                <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                <div className={styles.overlay}></div>
                            </div>
                        ))
                    }
                </div>
                { ElementImages.length > 9 && <button className={styles.singlePorductButton} onClick={handleClick}>
                    {Btn}
                </button>}
            </div>
            { product === "Upholstery" && 
            <div className={styles.pageContent}>
            <h3 style={{margin: '2% 0'}}><li>Cushions</li></h3>
            <div className={styles.ImageContainer}>
                {
                    CushionImages.map((item, index) => (
                        <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                            <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image"/>
                            <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                            <div className={styles.overlay}></div>
                        </div>
                    ))
                }
            </div>
        </div>
            }
        </div>
    );
}

export default SingleProduct;