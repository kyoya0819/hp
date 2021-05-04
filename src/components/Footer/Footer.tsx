import React from 'react';

import scss from './Footer.module.scss';

const Footer = () => {

    return (
        <footer className={ scss.footer }>
            <div className="inner">
                (C) kyoya0819 2020
            </div>
        </footer>
    );
};

export default Footer;