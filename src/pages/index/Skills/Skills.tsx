import React from 'react';

import scss from './Skills.module.scss';

import Title from './../../../components/Title/Title';

const Skills = () => {

    return (
        <div className={ scss.skills }>
            <div className="inner">
                <Title title="スキル / Skills" />
                <ul>
                    <li>HTML</li>
                    <li>CSS</li><li>Sass</li>
                    <li>BootStrap</li><li>Bulma</li>
                    <li>JavaScript</li><li>TypeScript</li><li>JSX</li>
                    <li>Vue.js</li><li>Nuxt.js</li><li>React</li><li>Next.js</li><li>Gatsby</li><li>Express.js</li><li>Svelte</li>
                    <li>PHP</li>
                    <li>Laravel</li><li>CakePHP</li><li>WordPress</li><li>Drupal</li><li>WordPress</li>
                    <li>SQL</li>
                    <li>MySQL / MariaDB</li><li>PostgreSQL</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Liquid</li>
                    <li>Go</li>
                    <li>Java</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;