import React from 'react';

import scss from './Skills.module.scss';

import Title from './../../../components/Title/Title';

import json from

const Skills = () => {
    
    let array_skills: ReactElement[] = [];
    Object.keys(json).forEach((key: string) => {
        let skill_name = json[key];
        array_skills.push(<li>{ skill_name }</li>);
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
