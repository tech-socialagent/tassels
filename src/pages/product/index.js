import Faq from '@/Components/Home/Faq';
import FollowUs from '@/Components/Home/followUs';
import Franchises from '@/Components/Home/franchises';
import GetQuote from '@/Components/Home/getQuote';
import Navbar from '@/Components/Home/navbar';
import Featured from '@/Components/Product/Featured';
import Menu from '@/Components/Product/Menu';
import SingleProduct from '@/Components/Product/SingleProduct';
import Story from '@/Components/Product/Story';
import TasselsFooter from '@/Components/footer';
import React from 'react';

function product1() {
    return (
        <>
            <title>Tassels</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <>
                <Navbar />
                <Menu />
                <SingleProduct />
                <Featured />
                <Story />
                <GetQuote />
                <Franchises />
                <FollowUs />
                <Faq/>
                <TasselsFooter />
            </>
        </>
    );
}

export default product1;