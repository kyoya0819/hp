import React from 'react';
import 'moment-timezone';

import scss from './index.module.scss';

import Top from './top/top';
import ProgrammingSkills from './skills/programming';
import OtherSkills from './skills/other';
import Links from './links/links';

const Index = () => {

    document.title = "kyoya0819 | TOP";

    return (
        <div className={`inner ${ scss.index }`}>
            <Top />

            <ProgrammingSkills />

            <OtherSkills />

            <Links />
        </div>
    );
}

export default Index;