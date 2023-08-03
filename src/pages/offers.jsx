import Faq from '@/Components/Home/Faq';
import Review from '@/Components/Home/Review';
import Exclusive from '@/Components/Home/exclusive';
import FollowUs from '@/Components/Home/followUs';
import Franchises from '@/Components/Home/franchises';
import GetQuote from '@/Components/Home/getQuote';
import Navbar from '@/Components/Home/navbar';
import OffersMain from '@/Components/Offers/offerMain';
import Featured from '@/Components/Product/Featured';
import Story from '@/Components/Product/Story';
import TasselsFooter from '@/Components/footer';
import React from 'react';

function Offers() {
    return (
        <>
            <Navbar />
            <OffersMain />
            <Featured />
            <Story />
            <GetQuote />
            <Franchises />
            <FollowUs />
            <Review />
            <Faq />
            <TasselsFooter />
        </>
    );
}

export default Offers;