import React, { FC } from "react";
import Head from "next/head";

import Hero from "screens/about/Hero/Hero";
import Skills from "screens/about/Skills/Skills";
import Histories from "screens/about/Histories/Histories";

const About: FC = () => {

    return (
        <>
            <Head>
                <title>kyoya0819 | About</title>
                <meta name="description" content="" />
            </Head>

            <main>
                <Hero />
                <Skills />
                <Histories />
            </main>
        </>
    );
};
export default About;