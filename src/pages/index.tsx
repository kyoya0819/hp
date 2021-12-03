import type { NextPage } from "next";
import Head from "next/head";

import Hero from "screens/index/Hero/Hero";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>kyoya0819 | TOP</title>
                <meta name="description" content="" />
            </Head>

            <main>
                <Hero />
            </main>
        </>
    );
};

export default Home;
