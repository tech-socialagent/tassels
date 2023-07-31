import React from 'react';
import styles from '@/styles/spacewood/spacewoodmain.module.css';
import Image from 'next/image';

function SpacewoodMain() {
    const data = [
        {
            title: 'KITCHENS',
            desc: 'Our meticulously crafted kitchen furniture pieces are ideally designed to enliven your space with the timeless elegance of baroque style. With a perfect blend of form and function, these pieces add a touch of grandeur and sophistication to any kitchen.',
            img: [
                '/Assets/spacewood/kitchenimg1.webp',
                '/Assets/spacewood/kitchenimg2.webp',
                '/Assets/spacewood/kitchenimg3.webp',
            ]
        },
        {
            title: 'WARDROBES',
            desc: 'Discover our wide range of ergonomically designed wardrobes, meticulously crafted to cater to your unique needs. With a variety of styles, finishes, and storage options, our wardrobes offer both functionality and aesthetic appeal, ensuring an organized and stylish space.   ',
            img: [
                '/Assets/spacewood/kitchen1.webp',
                '/Assets/spacewood/kitchen2.webp',
                '/Assets/spacewood/kitchen3.webp',
            ]
        },
        {
            title: 'BEDROOM SET',
            desc: 'Experience the epitome of style and tranquility with our collection of modern designs. Meticulously crafted to embody elegance, our furniture pieces create a serene atmosphere that evokes a sense of peace and harmony in your space.',
            img: [
                '/Assets/spacewood/kitchen1.webp',
                '/Assets/spacewood/kitchen2.webp',
                '/Assets/spacewood/kitchen3.webp',
            ]
        },
    ]

    return (
        <div className={styles.spacewoodWrap}>
            {
                data.map((item) => (
                    <div className={styles.eachElement}>
                        <h4>SPACEWOOD</h4>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <div className={styles.ThreeImage}>
                            {item.img.map((each) => (
                                <div className={styles.SingleImageContianer}>
                                    <Image src={each} width={2000} height={2000} className={styles.SingleImage} />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SpacewoodMain;