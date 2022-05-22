import React, { FC } from "react";

const A: FC<{
    href: string,
    className?: string,
    children: React.ReactNode
}> = ({ href, className, children }) => {

    return (
        <a href={ href } className={ className } target="_blank" rel="noopener noreferrer">{
            children
        }</a>
    );
};
export default A;
