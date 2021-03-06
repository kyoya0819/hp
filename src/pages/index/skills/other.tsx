import React from 'react';
import skills from '../../../data/skills.json';
import scss from './skills.module.scss';

const OtherSkills = () => {

    return (
        <section>
            <h3>OTHER SKILLS</h3>
            <ul className={ scss.skills }>
                { skills.other.map((name, i) => <li key={ i }><span>{ name }</span></li>) }
            </ul>
        </section>
    );
}

export default OtherSkills;