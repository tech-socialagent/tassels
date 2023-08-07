import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/Product/featured.module.css';
import SectionHeader from '../SectionHeader';
import { ProductContext } from '@/Context';
import { OurProductData } from '../content';
import Image from 'next/image';
import { useRouter } from 'next/router';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

function Featured() {

    const [shuffledList, setShuffledList] = useState([]);

    const { product, setProduct } = useContext(ProductContext);
    const router = useRouter();

    const data = OurProductData.filter((item) => item.title !== product).slice(0,4);

    // const shuffledList = data.sort(() => 0.5 - Math.random());
    // const selectedItems = shuffledList.slice(0,4);

    useEffect(() => {
        // When the context changes, shuffle the list
        const shuffled = shuffleArray([...data]);
        setShuffledList(shuffled);
      }, [product]);

    const handleClick = (e,title) => {
        e.preventDefault();
        setProduct(title);

        router.push('/product')
    }

    return (
        <div className={styles.featuredWrap}>
            <SectionHeader title='Featured Collections' desc='Transform your space with a personalized touch. Get a quote and let our experts 
            take care of the rest!' />
            <div className={styles.featuredContainer}>
                {shuffledList.map((item) => (
                    <div className={styles.featuredImageContainer} onClick={(e) => handleClick(e,item.title)}>
                        <div className={styles.overlay}></div>
                        <Image src={item.img} width={1000} height={1000} alt='Image' className={styles.featuredImage}/>
                        <div className={styles.featuredText}>
                            <h4>{item.title}</h4>
                            <p>Explore Now</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Featured;