import React, { FC } from "react";

import scss from "./Title.module.scss";

const Title: FC = ({ children }) => {

    return (
        <h2 className={ scss.title }>
            <span className={ scss.title_left }>
                { children }
                <span />
            </span>
            <span className={ scss.title_right }>
                <span />
            </span>
        </h2>
    );
};

export default Title;