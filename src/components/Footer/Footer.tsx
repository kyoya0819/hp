import React, { FC } from "react";

import scss from "./Footer.module.scss";

const Footer: FC = () => {

    return (
        <footer className={ scss.footer }>
            <div className="inner">
                (C) kyoya0819 2020
            </div>
        </footer>
    );
};

export default Footer;