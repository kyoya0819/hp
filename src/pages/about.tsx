import React, { FC } from "react";
import Head from "next/head";

import Hero from "screens/about/Hero/Hero";
import Skills from "screens/about/Skills/Skills";

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
            </main>
        </>
    );
};
export default About;