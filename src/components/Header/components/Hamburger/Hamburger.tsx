import React, { FC } from "react";

import scss from "./Hamburger.module.scss";

const Hamburger: FC<{ open: boolean }> = ({ open }) => {

    return (
        <div className={ scss.wrap }>
            <input type="checkbox" defaultChecked={ open } />
            <div className={ scss.hamburger }>
                <span />
                <span />
                <span />
            </div>
        </div>
    );
};
export default Hamburger;