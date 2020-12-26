import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import route from './../Route';
import './header.scss';

export default class Header extends Component<RouteComponentProps> {

    fit = () => {
        console.log('run');
        document.getElementsByTagName('header')[0].style.height = window.innerHeight + 'px';
        let element = document.getElementById('main');
        if (element === null)
            return;
        element.style.marginTop = window.innerHeight + 'px';
        element.style.minHeight = window.innerHeight + 'px';
    }

    componentDidMount() {
        window.onload = window.onresize = () => this.fit();
    }

    LinkElement = (name: string, text: string) => {
        let className: string = this.props.location.pathname === route(name) ? 'active' : '';
        return (<Link to={route(name)} className={className}>{text}</Link>);
    }

    render() {
        return (
            <header>
                <div className="inner">
                    <h1>
                        <Link to={route('index')} className="h1">kyoya0819</Link>
                    </h1>
                    <nav>
                        <ul>
                            <li>{this.LinkElement('about', 'About')}</li>
                            <li>{this.LinkElement('create', 'Create')}</li>
                            <li>{this.LinkElement('contact', 'Contact')}</li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}