import React, { FC, MouseEventHandler } from "react";

import twitter from "images/twitter.webp";
import discord from "images/discord.webp";
import github from "images/github.webp";
import qiita from "images/qiita.webp";
import zenn from "images/zenn.webp";
import facebook from "images/facebook.webp";
import email from "images/email.webp";

import scss from "./SNS.module.scss";

const SNS: FC<{
    name?: "twitter"|"discord"|"github"|"qiita"|"zenn"|"facebook"|"email",
    hover?: boolean,
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}> = ({ name, hover= false, className, onClick, children }) => {

    const images = {
        twitter: twitter,
        discord: discord,
        github: github,
        qiita: qiita,
        zenn: zenn,
        facebook: facebook,
        email: email
    };

    return (
        <div
            className={ scss.sns + " " + (hover ? scss.hover : "") + (className ?? "") } data-sns={ name }
            onClick={ (e) => {
                if (onClick) onClick(e);
            } }
        >
            {
                name
                    ? <img src={ images[name].src } alt={ name } width={ images[name].width } height={ images[name].height } />
                    : <></>
            }
            <p>{ children }</p>
        </div>
    );
};
export default SNS;
