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
      img: '/Assets/Review/review2.webp',
      name: 'Arya',
      review: '“Good collection, supportive staff and value of words kept.”'
    },
    {
      id: 1,
      img: '/Assets/Review/review3.webp',
      name: 'Aakash',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 2,
      img: '/Assets/Review/review1.webp',
      name: 'Naheem',
      review: '“Good range of products at affordable prices”'
    },
    {
      id: 3,
      img: '/Assets/Review/review4.png',
      name: 'Darius',
      review: '“Great service! They give you lots of attention, options and never pressure you to make any hasty decision!”'
    },
    {
      id: 4,
      img: '/Assets/Review/review5.png',
      name: 'Suraj CR',
      review: '“Tassels is an eminent name in the world of furnishing and decor.”'
    },
    {
      id: 5,
      img: '/Assets/Review/review6.png',
      name: 'Ankit',
      review: '“Amazing variety and quality”'
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