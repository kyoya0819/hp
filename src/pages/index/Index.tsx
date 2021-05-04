import React, { Fragment } from 'react';

import First from './First/First';
import About from './About/About';
import Histories from './Histories/Histories';
import Skills from './Skills/Skills';
import Links from './Links/Links';
import Contact from './Contact/Contact';

const Index = () => {

    document.title = "kyoya0819 | TOP";

    return (
        <Fragment>
            <First />
            <About />
            <Histories />
            <Skills />
            <Links />
            <Contact />
        </Fragment>
    );
}

export default Index;