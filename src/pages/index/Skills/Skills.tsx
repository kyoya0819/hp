import React, { FC, ReactElement } from "react";

import scss from "./Skills.module.scss";

import Title from "components/Title/Title";

import json from "data/skills.json";

const Skills: FC = () => {
    
    const array_skills: ReactElement[] = [];
    Object.keys(json).forEach((key: string) => {
        const skill_name = json[Number(key)];
        array_skills.push(<li>{ skill_name }</li>);
    });

    return (
        <section className={ scss.skills }>
            <div className="inner">
                <Title>スキル / Skills</Title>
                <ul>{ array_skills.map((content) => content) }</ul>
            </div>
        </section>
    );
};

export default Skills;
