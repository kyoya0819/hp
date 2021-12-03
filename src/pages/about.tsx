import React, { FC } from "react";
import Head from "next/head";

import Hero from "../screens/index/Hero/Hero";

const About: FC = () => {

    return (
        <>
            <Head>
                <title>kyoya0819 | About</title>
                <meta name="description" content="" />
            </Head>

            <main>
                <Hero />
            </main>
        </>
    );
};
export default About;