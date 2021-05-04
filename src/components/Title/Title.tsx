import React, { useEffect } from 'react';

import scss from './Title.module.scss';

interface TitleInterface {
    title: string
}

const Title = (props: TitleInterface) => {

    useEffect(() => {
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    });

    return (
        <div className={ scss.title }>
            <h2>{ props.title }</h2>
        </div>
    );
};

const onScroll = () => {

    let elements = document.getElementsByClassName( scss.title );
    Object.keys(elements).forEach((key) => {
        let element = elements[Number(key)];
        let top = element.getBoundingClientRect().top;

        if (window.pageYOffset + window.innerHeight > window.pageYOffset + top)
            element.classList.add(scss.view);
    });
}

export default Title;