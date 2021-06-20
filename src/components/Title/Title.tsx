import React, { FC, useEffect } from "react";

import scss from "./Title.module.scss";

interface TitleInterface {
    title: string
}

const Title: FC<TitleInterface> = ({ title }) => {

    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    });

    return (
        <div className={ scss.title }>
            <h2>{ title }</h2>
        </div>
    );
};

const onScroll = () => {

    const elements = document.getElementsByClassName( scss.title );
    Object.keys(elements).forEach((key) => {
        const element = elements[Number(key)];
        const top = element.getBoundingClientRect().top;

        if (window.pageYOffset + window.innerHeight > window.pageYOffset + top)
            element.classList.add(scss.view);
    });
};

export default Title;