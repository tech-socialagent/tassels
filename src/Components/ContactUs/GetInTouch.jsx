import React, { useState } from 'react';
import styles from '@/styles/ContactUs/GetInTouch.module.css';
import { SlSocialFacebook, SlSocialLinkedin, SlSocialYoutube, SlSocialTwitter, SlSocialInstagram } from 'react-icons/sl'
import Link from 'next/link';

function GetInTouch() {

    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        setData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    const contactInfo = [
        {
            title: 'WhatsApp:',
            desc: '+91 9886066184',
        },
        {
            title: 'Call:',
            desc: '080-49757757',
        },
        {
            title: 'Email:',
            desc: 'info@tasselsinterior.com',
        },
        {
            title: 'Address:',
            desc: `#7, 14th Main Rd, 1st Sector, HSR Layout 5th Sector, Bengaluru,
            Karnataka 560102`,
        },
    ]

    return (
        <div className={styles.GetInTouchWrap}>
            <div className={styles.GetInTouchLeft}>
                <form className={styles.GetInTouchForm} onSubmit={handleSubmit}>
                    <h3>Get In Touch</h3>
                    <div className={styles.formMenus}>
                        <input type="text" placeholder='Your name*' className={styles.formMenu} required name='name' value={data.name} onChange={handleChange} />
                        <input type="email" placeholder='Your email*' className={styles.formMenu} required name='email' value={data.email} onChange={handleChange} />
                    </div>
                    <input type="text" placeholder='Subject' className={styles.formMenu} required name='subject' value={data.subject} onChange={handleChange} />
                    <textarea type="text" className={styles.formMessage} style={{ width: '100%' }} name='message' value={data.message} onChange={handleChange}></textarea>
                    <button className={styles.getInTouchBtn} type='submit'>Send</button>
                </form>
            </div>
            <div className={styles.GetInTouchRight}>
                <div className={styles.mapContainer}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8534843821926!2d77.6355058742329!3d12.917136887393228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1575e9317fb1%3A0x8e811266fdc6e4c!2sTassels!5e0!3m2!1sen!2sin!4v1689573873805!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className={styles.infoContainer}>
                    <h3>Contact Info</h3>
                    <div className={styles.contactContaier}>
                        {contactInfo.map((item) => (
                            <div className={styles.contactMenu}>
                                <p><span>{item.title}</span>
                                    {item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.socialIcon}>
                        <Link href='https://www.facebook.com/tasselsdecor/' target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <span><SlSocialFacebook /></span>
                        </Link>
                        <Link href='https://twitter.com/TasselsHD' target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <span><SlSocialTwitter /></span>
                        </Link>
                        <Link href='https://www.instagram.com/tasselsinterior/?hl=en' target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <span><SlSocialInstagram /></span>
                        </Link>
                        <Link href='https://www.linkedin.com/company/tassels-interiors/' target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <span><SlSocialLinkedin /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;