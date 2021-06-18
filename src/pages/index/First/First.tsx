import React, { useEffect } from 'react';

import scss from './First.module.scss';

import background from 'images/background.webp';
import twitter from "images/twitter.png";
import github from "images/github.png";
import facebook from "images/facebook.png";

const First = () => {

    useEffect(() => {

        let first_tag = document.getElementsByClassName(scss.first)[0] as HTMLElement;
        first_tag.style.height = window.innerHeight + 'px';
    });

    return (
        <div className={ scss.first }>
            <img src={ background } className={ scss.background } id="sky" alt="sky" />
            <div className="inner">
                <h1>kyoya0819</h1>
            </div>
            <div className={ scss.link }>
                <div className="inner">
                    <ul>
                        <li><a href="https://twitter.com/kyoya0819" rel="noopener noreferrer" target="_blank"><img src={ twitter } alt="Twitter's logo" /></a></li>
                        <li><a href="https://github.com/kyoya0819" rel="noopener noreferrer" target="_blank"><img src={ github } alt="GitHub's logo" /></a></li>
                        <li><a href="https://facebook.com/kyoya0819" rel="noopener noreferrer" target="_blank"><img src={ facebook } alt="Facebook's logo" /></a></li>
                    </ul>
                </div>
            </div>
            <div className={ scss.box } />
            <div className={ scss.more }>
                <div onClick={ scroll }>
                    <p>More Detail</p>
                    <div className={ scss.scroll_down }>
                        <span /><span /><span />
                    </div>
                </div>
            </div>
        </div>
    );
};


const easeInOut = (x: number) => {
    if (x > 1) return 1;
    if (0 > x) return 0;

    // https://gist.github.com/gre/1650294
    return x<.5 ? 4*x*x*x : (x-1)*(2*x-2)*(2*x-2)+1;
}


const scroll = () => {

    let count = 0;
    let first = window.pageYOffset;
    let height = window.innerHeight - window.pageYOffset;

    let move = function () {
        count++;

        let position = first + height * easeInOut(count / 100);
        window.scrollTo(0, position);

        if (position < window.innerHeight)
            requestAnimationFrame(move);
    };

    requestAnimationFrame(move);
}

export default First;