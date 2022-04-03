import React, { FC } from "react";
import Head from "next/head";

import Hero from "screens/contact/Hero/Hero";

const Contact: FC = () => {

    return (
        <>
            <Head>
                <title>kyoya0819 | Contact</title>
                <meta name="description" content="" />
            </Head>

            <main>
                <Hero />
            </main>
        </>
    );
};
export default Contact;
