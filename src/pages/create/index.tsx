import React, { Component } from 'react';

import CreateCard from './../../components/index/create-card';
import projects from './../../data/projects.json';

import './index.scss';

export default class App extends Component {

    render() {
        document.title = "kyoya0819 | TOP";
        return (
            <div className="inner">
                <h2 className="h2">CREATE</h2>
                <ul id="creates">
                    { projects.map((project, i) => <CreateCard key={i} idNum={i+1} data={project} />) }
                </ul>
            </div>
        );
    }
}