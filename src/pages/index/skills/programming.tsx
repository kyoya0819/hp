import React from 'react';
import skills from '../../../data/skills.json';
import scss from './skills.module.scss';

const ProgrammingSkills = () => {

    return (
        <section>
            <h3>PROGRAMMING SKILLS</h3>
            <ul className={ scss.skills }>
                { skills.programming.map((name, i) => <li key={ i }><span>{ name }</span></li>) }
            </ul>
        </section>
    );
}

export default ProgrammingSkills;