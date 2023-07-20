import Faq from '@/Components/Home/Faq';
import Review from '@/Components/Home/Review';
import FollowUs from '@/Components/Home/followUs';
import Franchises from '@/Components/Home/franchises';
import Navbar from '@/Components/Home/navbar';
import TasselsFooter from '@/Components/footer';
import React from 'react';

function Spacewood() {
    return ( 
        <>
            <Navbar />
            <Franchises />
            <FollowUs />
            <Review />
            <Faq />
            <TasselsFooter />
        </>
     );
}

export default Spacewood;