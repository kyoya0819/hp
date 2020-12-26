import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import route from './../Route';
import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="inner">
                    <h1>
                        <Link to={route('index')}>kyoya0819</Link>
                    </h1>
                </div>
            </header>
        );
    }
}