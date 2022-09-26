import type { NextPage } from "next";
import Head from "next/head";

import About from "sections/index/About";
import Contact from "sections/index/Contact";
import Hero from "sections/index/Hero";
import PersonalHistory from "sections/index/PersonalHistory";
import Skills from "sections/index/Skills";
import Slides from "sections/index/Slides";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>kyoya0819 / Miyako Nari</title>
            </Head>

            <main>
                <Hero />
                <About />
                <PersonalHistory />
                <Skills />
                <Slides />
                <Contact />
            </main>
        </>
    );
};
export default Home;
