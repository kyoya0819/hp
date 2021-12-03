import React, { FC } from "react";

import scss from "./SNS.module.scss";

const SNS: FC<{
    logo: string,
    name: string,
    width: number,
    height: number,
    id?: string,
    className?: string
}> = ({ logo, name, width, height, id, className }) => {

    return (
        <div id={ id ?? "" } className={ scss.sns + " " + (className ?? "") }>
            <img src={ logo } alt={ name } width={ width } height={ height } />
            <p>{ name }</p>
        </div>
    );
};
export default SNS;