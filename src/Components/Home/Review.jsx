import React, { useState } from 'react';
import styles from '@/styles/home/Review.module.css';
import Image from 'next/image';
import { BsFillStarFill } from 'react-icons/bs';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import SectionHeader from '../SectionHeader';

function Review() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);

  const list = [
    {
      id: 1,
      img: '/Assets/product/OurProduct1.webp',
      name: 'Arya',
      review: '“Good collection, supportive staff and value of words kept.”'
    },
    {
      id: 2,
      img: '/Assets/product/OurProduct2.webp',
      name: 'Aakash',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 3,
      img: '/Assets/product/OurProduct3.webp',
      name: 'Naheem',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 4,
      img: '/Assets/product/OurProduct1.webp',
      name: 'Four',
      review: '“Good collection, supportive staff and value of words kept.”'
    },
    {
      id: 5,
      img: '/Assets/product/OurProduct2.webp',
      name: 'Five',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 6,
      img: '/Assets/product/OurProduct3.webp',
      name: 'Six',
      review: '“Good range of products at affordable prices”'
    }
  ];
  
  const lastIndex = list.length - 1;
  const handleNextClick = () => {
    if (endIndex === lastIndex) return;

    setStartIndex(startIndex + 1);
    setEndIndex(endIndex + 1);
  };

  const handlePreviousClick = () => {
    if (startIndex === 0) return;

    setStartIndex(startIndex - 1);
    setEndIndex(endIndex - 1);
  };

  const show = list.slice(startIndex, endIndex + 1);
  return (
    <>
      <SectionHeader
        title="Reviews"
        desc="Hear the reviews from our delighted clients, that illustrate the transformative impact of our interior decor expertise."
      />
      <div className={styles.ReviewWrap}>
        <div className={styles.ArrowContainer}><span style={{opacity: startIndex === 0 ? '0.4' : '1'}} onClick={handlePreviousClick}><IoIosArrowDropleftCircle/></span></div>
        <div className={styles.ReviewContainer}>
          <div className={styles.Center}>
            <Image src={show[0].img} width={1000} height={1000} className={styles.reviewImageLeft} />
            <h3>{show[0].name}</h3>
            <div className={styles.StarContainer}>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
            </div>
            <p>{show[0].review}</p>
          </div>
          <div className={styles.Center} style={{scale:'1.15'}}>
            <Image src={show[1].img} width={1000} height={1000} className={styles.reviewImage} />
            <h3>{show[1].name}</h3>
            <div className={styles.StarContainer}>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
            </div>
            <p>{show[1].review}</p>
          </div>
          <div className={styles.Center}>
            <Image src={show[2].img} width={1000} height={1000} className={styles.reviewImageLeft} />
            <h3>{show[2].name}</h3>
            <div className={styles.StarContainer}>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
            </div>
            <p>{show[2].review}</p>
          </div>
          <div className={styles.CenterMobile}>
            <Image src={show[0].img} width={1000} height={1000} className={styles.reviewImagePhone} />
            <h3>{show[0].name}</h3>
            <div className={styles.StarContainer}>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
              <span><BsFillStarFill /></span>
            </div>
            <p>{show[0].review}</p>
          </div>
        </div>
        <div className={styles.ArrowContainer}><span  style={{opacity: endIndex === lastIndex ? '0.4' : '1' }} onClick={handleNextClick}><IoIosArrowDroprightCircle/></span></div>
      </div>
    </>
  );
}

export default Review;