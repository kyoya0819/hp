import React, { Fragment } from 'react';

import First from './First/First';
import About from './About/About';
import History from './History/History';
import Skills from './Skill/Skills';
import Links from './Links/Links';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Index = () => {

    document.title = "kyoya0819 | TOP";

    return (
        <Fragment>
            <First />
            <About />
            <History />
            <Skills />
            <Links />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default Index;