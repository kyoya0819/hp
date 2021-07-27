import React, { FC, Fragment } from "react";

import First from "./First/First";
import About from "./About/About";
import Histories from "./Histories/Histories";
import Created from "./Created/Created";
import Skills from "./Skills/Skills";
import Links from "./Links/Links";
import Contact from "./Contact/Contact";

import Footer from "components/Footer/Footer";

const Index: FC = () => {

    document.title = "kyoya0819 | TOP";

    return (
        <Fragment>
            <main>
                <First />
                <About />
                <Histories />
                <Created />
                <Skills />
                <Links />
                <Contact />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Index;