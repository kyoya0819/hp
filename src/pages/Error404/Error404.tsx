import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import route from 'Route';

import scss from "./Error404.module.scss";

import background from "images/background.webp";

const NotFound = () => {

    document.title = "kyoya0819 | NOT FOUND";

    useEffect(() => {

        let first_tag = document.getElementById("notfound") as HTMLElement;
        first_tag.style.height = window.innerHeight + 'px';
    });

    return (
        <main id="notfound" className={ scss.first }>
            <img src={ background } id="sky" alt="sky" />
            <div className="inner">
                <h1 className={ scss.title }>kyoya0819 | NOT FOUND</h1>
                <p>
                    <Link to={ route('index') } className={ scss.to_top }>TOP PAGE</Link>
                </p>
            </div>
            <div className={ scss.box } />
        </main>
    );
};

export default NotFound;