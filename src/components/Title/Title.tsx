import React from 'react';

import scss from './Title.module.scss';

interface TitleInterface {
    title: string
}

const Title = (props: TitleInterface) => {

    return (
        <div className={ scss.title }>
            <h2>{ props.title }</h2>
        </div>
    );
};

export default Title;