import React from 'react';

import scss from './Skills.module.scss';

import Title from './../../../components/Title/Title';

import json from

const Skills = () => {
    
    let array_skills: ReactElement[] = [];
    Object.keys(json).forEach((value: string, key: string) => {
        array_skills.push(<li>{ string }</li>);
    });

    return (
        <div className={ scss.skills }>
            <div className="inner">
                <Title title="スキル / Skills" />
                <ul>{ array_skills.map((content) => content) }</ul>
            </div>
        </div>
    );
};

export default Skills;
