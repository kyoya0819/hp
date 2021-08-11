import React, { FC } from "react";

import scss from "./Skills.module.scss";

import Title from "components/Title/Title";

import json from "data/skills.json";

const Skills: FC = () => {

    return (
        <section className={ scss.skills }>
            <div className="inner">
                <Title>スキル / Skills</Title>
                <ul>{
                    Object.keys(json).map((key: string) => {
                        return <li key={ key }>{ json[Number(key)] }</li>;
                    })
                }</ul>
            </div>
        </section>
    );
};

export default Skills;
