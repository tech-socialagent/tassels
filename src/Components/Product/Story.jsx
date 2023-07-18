import React from 'react';
import styles from "@/styles/Product/story.module.css";
import Image from 'next/image';
import StoryBg from '../../../public/Assets/StoryImage.webp';
import SectionHeader from '../SectionHeader';

function Story() {
    return ( 
        <div className={styles.storyContainer}>
            <h1 className={styles.storyTitle}>Our Story</h1>
            <Image src={StoryBg} alt="Image" width={1000} height={1000} className={styles.storyImage}/>
            <div className={styles.storyContent}>
                <h1>Our Story</h1>
                <p>We at <span>TASSELS</span> believe in crafting products that transform bricks and mortar structures into cozy and
                welcoming spaces. Tassels has successfully reimagined several homes over the last 12 years . We are
                proud to have an enriched clientele which includes Piramal Developers, Sriram Builders to name a
                few.</p>
                <p>Your home is an oasis, a space to make profound memories and to express your individuality, and
                that's where TASSELS comes into play. We're much more than a source for beautiful home
                furnishings and furniture. Here, you'll find inspiration, excitement and all the elements that you
                need to transform your creative décor ideas into reality. Beneath our products' stylish exteriors,
                you'll find incomprehensive value. From authentic, hand finished details and mesmerizing
                upholstery to dovetailed drawers and bench-made frames, no detail is too small to consider in our
                relentless pursuit of exceptional quality.</p>
            </div>
        </div>
     );
}

export default Story;