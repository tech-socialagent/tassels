import React from 'react';
import styles from '@/styles/ContactUs/GetInTouch.module.css';
import { SlSocialFacebook, SlSocialLinkedin, SlSocialYoutube, SlSocialTwitter } from 'react-icons/sl'

function GetInTouch() {

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
                <form className={styles.GetInTouchForm}>
                    <h3>Get In Touch</h3>
                    <div className={styles.formMenus}>
                        <input type="text" placeholder='Your name*' className={styles.formMenu} required />
                        <input type="email" placeholder='Your email*' className={styles.formMenu} required />
                    </div>
                    <input type="text" placeholder='Subject' className={styles.formMenu} required />
                    <input type="text" className={styles.formMessage} />
                    <button className={styles.getInTouchBtn}>Send</button>
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
                        <span><SlSocialFacebook /></span>
                        <span><SlSocialTwitter /></span>
                        <span><SlSocialLinkedin /></span>
                        <span><SlSocialYoutube /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;