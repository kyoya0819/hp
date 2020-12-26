import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import projects from './../../data/projects.json'
import NotFound from './../404';

import './single.scss';

type Props = RouteComponentProps<{id: string}>;

type Project = {
    title: string,
    app_name: string,
    tech: string[],
    bodies: string[],
    image: string[]
}

class App extends Component<Props> {
    render() {
        const id: number = Number(this.props.match.params.id) - 1;
        if (!(id in projects))
            return <NotFound />;

        const project: Project = projects[id];
        document.title = "kyoya0819 | " + project.app_name;

        let project_body = "";
        project.bodies.forEach(function (body: string) {
            let body_ = body.replace(/\r?\n/g, '<br />');
            project_body += `<p>${body_}</p>`;
        });

        return (
            <div className="inner">
                <h2 className="h2">{project.title}</h2>
                <section>
                    <h3 className="h3">{project.app_name}</h3>
                    <div id="body" className="left" dangerouslySetInnerHTML={{__html: project_body}} />
                </section>
                <section>
                    <h4 className="h4">仕様技術（タグ）</h4>
                    <ul id="teches" className="left">
                        { project.tech.map((name, i) => <li key={i}>{name}</li>) }
                    </ul>
                </section>
                <section>
                    <h4 className="h4">画像</h4>
                    <ul id="images">
                        {
                            project.image.map(
                                (path:string, i:number) => (
                                    <li key={i}>
                                        <a href={ '/images/' + path } target="_blank" rel="noreferrer">
                                            <img src={ '/images/' + path } alt={project.app_name} />
                                        </a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </section>
            </div>
        );
    }
}

export default App;