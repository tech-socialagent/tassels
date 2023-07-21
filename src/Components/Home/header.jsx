import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '@/styles/home/header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {

    const router = useRouter();
    const [isFixed, setIsFixed] = useState(false);
    const [pauseHover, setPauseHover] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsFixed(scrollTop > 35);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const bannerContent = [
        {
            title: `FLOORINGS`,
            desc: `Upgrade Your Home's Aesthetics with an Array of Gorgeous Flooring Options to Suit Your Style and Budget`,
            img: '/Assets/banner/banner1.webp',
        },
        {
            title: `BLINDS`,
            desc: `Adjustable window coverings offering privacy and light control, available in various styles and materials for seamless integration into any decor`,
            img: '/Assets/banner/banner3.webp',
        },
        {
            title: `CURTAINS`,
            desc: `Versalite window coverings that provide privacy, light control and decortive flair enhancing the ambiance and functionality of any space.`,
            img: '/Assets/banner/banner2.webp',
        },
    ]

    return (
        <div className={styles.SectionWrap} style={{ marginTop: isFixed ? '73.5px' : '0px' }}>
            <Zoom scale={1.01} arrows={false} autoplay duration={5000} transitionDuration={1500} pauseOnHover={pauseHover}>
                {bannerContent.map((item, index) => (
                    <div key={index} className={styles.banner}>
                        <Image width={1000} height={1000} className={styles.bannerImage} src={item.img} alt="image" />
                        <div className={styles.overlay}></div>
                        <div className={styles.content}>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <button
                                onMouseEnter={() => setPauseHover(true)}
                                onMouseLeave={() => setPauseHover(false)}
                                onClick={() => router.push('/getQuote')}
                            >
                                Get Quote
                            </button>
                        </div>
                    </div>
                ))}
            </Zoom>
        </div>
    );
}

export default Header;