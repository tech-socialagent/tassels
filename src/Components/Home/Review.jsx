import React from 'react';
import styles from '@/styles/home/Review.module.css';
import SectionHeader from '../SectionHeader';
import Slider from "react-slick";

function Review() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return ( 
        <div className={styles.reviewWrap}>
            <SectionHeader title='Reviews' desc='Hear the reviews from our delighted clients, that illustrate the transformative impact of our interior decor expertise.'/>
            <Slider {...settings}>
                <div>Slider</div>
                <div>Slider</div>
                <div>Slider</div>
                <div>Slider</div>
                <div>Slider</div>
            </Slider>
        </div>
     );
}

export default Review;