import React from 'react';
import 'moment-timezone';

import scss from './Index.module.scss';

import About from './about/about';
import ProgrammingSkills from './skills/programming';
import OtherSkills from './skills/other';
import Timeline from './timeline/timeline';
import Links from './links/links';

const Index = () => {

    document.title = "kyoya0819 | TOP";

    return (
        <div className={`inner ${ scss.index }`}>
            <About />

            <ProgrammingSkills />

            <OtherSkills />

            <Timeline />

            <Links />
        </div>
    );
}

export default Index;