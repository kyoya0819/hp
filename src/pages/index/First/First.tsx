import React, { FC, useEffect } from "react";

import Link from "components/Link/Link";

import scss from "./First.module.scss";

import twitter from "images/twitter.png";
import github from "images/github.png";
import facebook from "images/facebook.png";
import background from "images/background.webp";

const First: FC = () => {

    useEffect(() => {

        const first_tag = document.getElementsByClassName(scss.first)[0] as HTMLElement;
        first_tag.style.height = window.innerHeight + "px";
    });

    return (
        <section className={ scss.first }>
            <img src={ background } className={ scss.background } id="sky" alt="sky" />
            <div className={`inner ${scss.inner}`}>
                <h1>kyoya0819</h1>

                <div className={ scss.right }>
                    <Link href="https://twitter.com/kyoya0819" target="_blank"><img src={ twitter } alt="Twitter's logo" /></Link>
                    <Link href="https://facebook.com/kyoya0819" target="_blank"><img src={ facebook } alt="Facebook's logo" /></Link>
                    <Link href="https://github.com/kyoya0819" target="_blank"><img src={ github } alt="GitHub's logo" /></Link>
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
        </section>
    );
};


const easeInOut = (x: number) => {
    if (x > 1) return 1;
    if (0 > x) return 0;

    // https://gist.github.com/gre/1650294
    return x<.5 ? 4*x*x*x : (x-1)*(2*x-2)*(2*x-2)+1;
};


const scroll = () => {

    let count = 0;
    const first = window.scrollY;
    const height = window.innerHeight - window.scrollY;

    const move = function () {
        count++;

        const position = first + height * easeInOut(count / 100);
        window.scrollTo(0, position);

        if (position < window.innerHeight)
            requestAnimationFrame(move);
    };

    requestAnimationFrame(move);
};

export default First;