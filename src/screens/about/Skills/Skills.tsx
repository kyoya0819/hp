import React, { FC } from "react";

import scss from "./Skills.module.scss";

import skills from "data/skills.json";

const Skills: FC = () => {

    return (
        <section>
            <div className="inner">
                <div className={ scss.skills }>

                    <h2>Skills</h2>

                    <ul className={ scss.list }>{
                        skills.programming.map((value, index) => {
                            return <li key={ index }>{ value }</li>;
                        })
                    }</ul>

                    <ul className={ scss.list }>{
                        skills.others.map((value, index) => {
                            return <li key={ index }>{ value }</li>;
                        })
                    }</ul>
                </div>
            </div>
        </section>
    );
};
export default Skills;