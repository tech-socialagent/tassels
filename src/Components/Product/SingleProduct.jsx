import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/Product/singleProduct.module.css';
import { ProductContext } from '../../Context.js';
import { AiOutlineArrowRight, AiOutlineLeft } from 'react-icons/ai';
import { OurProductData } from '@/Components/content';
import { ProductImages, CushionImages, sheerImages, rodImages, grassImages, carpetImages, tassels } from '@/Components/content';
import Image from 'next/image';
import { useRouter } from 'next/router.js';
// import CurtainType from './CurtainTypes.jsx';

function SingleProduct() {

    const { product } = useContext(ProductContext);
    const router = useRouter();
    const Element = OurProductData.find((element) => element.title === product);
    const ElementImages = ProductImages.filter((data) => data.title === Element?.title);

    const [Btn, setBtn] = useState("SEE MORE");
    const [toShow, setToShow] = useState(9)

    const handleClick = (e) => {
        e.preventDefault();
        if (Btn == 'SEE MORE') {
            setToShow(ElementImages.length + 1);
            setBtn("SEE LESS");
        } else {
            setToShow(9);
            setBtn("SEE MORE")
        }
    }

    const DisplayImage = ElementImages.slice(0, toShow)

    useEffect(() => {
        setToShow(9);
        setBtn("SEE MORE");
    }, [product]);

    return (
        <div className={styles.singleProductWrap}>
            <div className={styles.pageTitle}>
                <span><AiOutlineLeft onClick={() => router.push('/#products')} /></span>
                <h2>Our Products</h2>
            </div>
            <div className={styles.pageContent}>
                <h3>{Element?.title}</h3>
                <p>{Element?.content}</p>
                {product === 'Curtains' &&
                    <h3 style={{ margin: '2% 0' }}><li>Main Curtains</li></h3>
                }
                {product === 'Flooring' &&
                    <h3 style={{ margin: '2% 0' }}><li>Wooden Flooring</li></h3>
                }
                {product === 'Accessories' &&
                    <h3 style={{ margin: '2% 0' }}><li>Borders and Laces</li></h3>
                }
                <div className={styles.ImageContainer}>
                    {
                        DisplayImage.map((item, index) => (
                            <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                <div className={styles.overlay}></div>
                            </div>
                        ))
                    }
                </div>
                {ElementImages.length > 9 && <button className={styles.singlePorductButton} onClick={handleClick}>
                    {Btn}
                </button>}
            </div>
            {product === "Upholstery" &&
                <div className={styles.pageContent}>
                    <h3 style={{ margin: '4% 0 1%' }}><li>Cushions</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            CushionImages.map((item, index) => (
                                <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                    <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                    <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                    <div className={styles.overlay}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            {product === "Accessories" &&
                <div className={styles.pageContent}>
                    <h3 style={{ margin: '4% 0 1%' }}><li>Curtain Tassels</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            tassels.map((item, index) => (
                                <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                    <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                    <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                    <div className={styles.overlay}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            {product === "Curtains" &&
                <div className={styles.pageContent}>
                    <h3 style={{ margin: '4% 0 1%' }}><li>Sheer Curtains</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            sheerImages.map((item, index) => (
                                <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                    <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                    <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                    <div className={styles.overlay}></div>
                                </div>
                            ))
                        }
                    </div>
                    {/*<CurtainType />*/}
                </div>
            }
            {product === "Rods and Tracks" &&
                <div className={styles.pageContent}>
                    <h3 style={{ margin: '0% 0 1%' }}><li>Single Rods</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            rodImages.map((item, index) => {
                                if (item.title === 'single') {
                                    return <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                        <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                        <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                        <div className={styles.overlay}></div>
                                    </div>
                                }
                                return null;
                            })
                        }
                    </div>
                    <h3 style={{ margin: '4% 0 1%' }}><li>Double Rods</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            rodImages.map((item, index) => {
                                if (item.title === 'double') {
                                    return <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                        <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                        <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                        <div className={styles.overlay}></div>
                                    </div>
                                }
                                return null;
                            })
                        }
                    </div>
                    <h3 style={{ margin: '4% 0 1%' }}><li>Tracks</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            rodImages.map((item, index) => {
                                if (item.title === 'tracks') {
                                    return <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                        <p>{item.name}</p>
                                        <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                        <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                        <div className={styles.overlay}></div>
                                    </div>
                                }
                                return null;
                            })
                        }
                    </div>
                </div>
            }
            {product === "Flooring" &&
                <div className={styles.pageContent}>
                    <h3 style={{ margin: '4% 0 1%' }}><li>Carpets</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            carpetImages.map((item, index) => (
                                <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                    <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                    <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                    <div className={styles.overlay}></div>
                                </div>
                            ))
                        }
                    </div>
                    <h3 style={{ margin: '4% 0 1%' }}><li>Artificial Grass</li></h3>
                    <div className={styles.ImageContainer}>
                        {
                            grassImages.map((item, index) => (
                                <div className={styles.singleImageContainer} key={index} onClick={() => router.push('/getQuote')}>
                                    <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image" />
                                    <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                    <div className={styles.overlay}></div>
                                </div>
                            ))
                        }
                    </div>
                    {/*<CurtainType />*/}
                </div>
            }
        </div>
    );
}

export default SingleProduct;