import React, {FC, InputHTMLAttributes} from "react";

import scss from "./Button.module.scss";

const Button: FC<InputHTMLAttributes<HTMLDivElement>> = (props) => {

    return (
        <div
            { ...props }
            className={ scss.button + " " + props.className }
        />
    );
};
export default Button;
