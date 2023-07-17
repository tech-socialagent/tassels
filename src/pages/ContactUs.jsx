import ContactHeader from '@/Components/ContactUs/ContactHeader';
import GetInTouch from '@/Components/ContactUs/GetInTouch';
import Navbar from '@/Components/Home/navbar';
import TasselsFooter from '@/Components/footer';
import React from 'react';

function ContactUs() {
    return ( 
        <>
            <Navbar />
            <ContactHeader />
            <GetInTouch />
            <TasselsFooter/>
        </>
     );
}

export default ContactUs;