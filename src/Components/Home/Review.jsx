import React, { useRef, useState } from 'react';
import styles from '@/styles/home/Review.module.css';
import Image from 'next/image';
import { BsFillStarFill } from 'react-icons/bs';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import SectionHeader from '../SectionHeader';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Review() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: styles.ReviewContainer,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const list = [
    {
      id: 0,
      img: '/Assets/product/OurProduct1.webp',
      name: 'Arya',
      review: '“Good collection, supportive staff and value of words kept.”'
    },
    {
      id: 1,
      img: '/Assets/product/OurProduct2.webp',
      name: 'Aakash',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 2,
      img: '/Assets/product/OurProduct3.webp',
      name: 'Naheem',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 3,
      img: '/Assets/product/OurProduct1.webp',
      name: 'Four',
      review: '“Good collection, supportive staff and value of words kept.”'
    },
    {
      id: 4,
      img: '/Assets/product/OurProduct2.webp',
      name: 'Five',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 5,
      img: '/Assets/product/OurProduct3.webp',
      name: 'Six',
      review: '“Good range of products at affordable prices”'
    }
  ];

  return (
    <>
      <SectionHeader
        title="Reviews"
        desc="Hear the reviews from our delighted clients, that illustrate the transformative impact of our interior decor expertise."
      />
      <div className={styles.ReviewWrap}>
        <div className={styles.ArrowContainer}><span onClick={handlePrev}><IoIosArrowDropleftCircle /></span></div>
        <Slider {...settings} className={styles.ReviewContainer} ref={sliderRef}>
          {list.map((show) => (
            <div className={show.id === slideIndex ? styles.CenterActive : styles.Center}>
              <Image src={show.img} width={1000} height={1000} className={styles.reviewImageLeft} />
              <h3>{show.name}</h3>
              <div className={styles.StarContainer}>
                <span><BsFillStarFill /></span>
                <span><BsFillStarFill /></span>
                <span><BsFillStarFill /></span>
                <span><BsFillStarFill /></span>
                <span><BsFillStarFill /></span>
              </div>
              <p>{show.review}</p>
            </div>
          ))}
        </Slider>
        <div id='faq' className={styles.ArrowContainer}><span onClick={handleNext}><IoIosArrowDroprightCircle /></span></div>
      </div>
    </>
  );
}

export default Review;