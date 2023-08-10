import React from 'react';
import styles from "@/styles/home/followUs.module.css";
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

function FollowUs() {

    const Images = [
        "/Assets/Insta/img2.webp",
        "/Assets/Insta/img1.webp",
        "/Assets/Insta/img3.webp",
        "/Assets/Insta/img4.webp",
        "/Assets/Insta/img6.webp",
        "/Assets/Insta/img7.webp",
        "/Assets/Insta/img8.webp",
        "/Assets/Insta/img9.webp",
        "/Assets/Insta/img5.webp",
    ]

    return (
        <div className={styles.followUsWrap}>
            <SectionHeader title='Follow Us On Instagram' desc='Stay connected and inspired! Follow us on Instagram for the latest trends, design inspiration, and exclusive offers. Join us today!' />
            <div className={styles.wrapper}>
                <div className={styles.topOval}></div>
                <div className={styles.stripW}>
                    {Images.map((image) => (
                        <div className={styles.stripItem}>
                            <Link href="https://www.instagram.com/tasselsinterior/?hl=en" target='_blank' style={{ textDecoration: 'none' }}>
                                <Image src={image} className={styles.CarouselImage} alt='Image' width={1000} height={1000} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={styles.bottomOval}>
                    <Link href="https://www.instagram.com/tasselsinterior/?hl=en" target='_blank' style={{ textDecoration: 'none' }}>
                        <div className={styles.instaContent}>
                            <span><AiFillInstagram /></span>
                            <p>@tasselsinterior</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FollowUs;