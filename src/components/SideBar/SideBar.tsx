import React from 'react';

import icon from './../../images/icon.webp';
import scss from './SideBar.module.scss';

const SideBar = () => {

    return (
        <div className={ scss.sidebar }>
            <div className={ scss.icon }>
                <img src={ icon } alt="kyoya0819" />
                <h1>kyoya0819</h1>
            </div>
        </div>
    );
};

export default SideBar;