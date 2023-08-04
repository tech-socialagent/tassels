import React from 'react';
import styles from '@/styles/home/exclusive.module.css';
import { Slide } from 'react-slideshow-image';
import Image from 'next/image';

function SliderComponent({ slideImage }) {
    return (
        <Slide
            autoplay
            duration={3000}
            transitionDuration={1000}
            arrows={false}
        >
            {slideImage.map((item) => (
                <Image src={item} width={2000} height={1000} className={styles.bannerTextImage} />
            ))}
        </Slide>
    );
}

export default SliderComponent;