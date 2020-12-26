import React, { Component } from 'react';
import './header.scss';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="inner">
                    <ul>
                        <li>Twitter</li>
                        <li>GitHub</li>
                        <li>teratail</li>
                        <li>Qiita</li>
                    </ul>
                </div>
            </footer>
        );
    }
}