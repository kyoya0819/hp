import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkInterface {
    href: string,
    target?: "_blank",
    className?: string
}

const Link: FC<LinkInterface> = ({ href, target, className, children }) => {

    if (href.startsWith("http"))
        return (
            <a href={ href } className={ className } target={ target ?? "_self" }>{ children }</a>
        );
    else
        return (
            <RouterLink to={ href } className={ className }>{ children }</RouterLink>
        );
};
export default Link;