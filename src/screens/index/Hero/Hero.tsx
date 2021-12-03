import React, { FC } from "react";

import A from "components/A";

import scss from "./Hero.module.scss";

import SNS from "./components/SNS/SNS";

import logo from "images/icon.webp";
import twitter from "images/twitter.webp";
import discord from "images/discord.webp";
import github from "images/github.webp";
import qiita from "images/qiita.webp";
import zenn from "images/zenn.webp";
import facebook from "images/facebook.webp";

const Hero: FC = () => {

    return (
        <section>
            <div className="inner">
                <div className={ scss.hero }>

                    <div className={ scss.left }>
                        <img src={ logo.src } alt="kyoya0819" width={ 1024 } height={ 1024 } />
                    </div>

                    <div className={ scss.right }>
                        <h2>kyoya0819 / Miyako Nari</h2>

                        <ul className={ scss.sns_list }>
                            <li><A href="https://twitter.com/kyoya0819">
                                <SNS
                                    id={ scss.twitter } className={ scss.hover }
                                    name="@kyoya0819"
                                    logo={ twitter.src } width={ 172 } height={ 142 }
                                />
                            </A></li>
                            <li><A href="https://github.com/kyoya0819">
                                <SNS
                                    id={ scss.github } className={ scss.hover }
                                    name="@kyoya0819"
                                    logo={ github.src } width={ 120 } height={ 120 }
                                />
                            </A></li>
                            <li><A href="https://qiita.com/kyoya0819">
                                <SNS
                                    id={ scss.qiita } className={ scss.hover }
                                    name="@kyoya0819"
                                    logo={ qiita.src } width={ 120 } height={ 120 }
                                />
                            </A></li>
                            <li><A href="https://zenn.dev/kyoya0819">
                                <SNS
                                    id={ scss.zenn } className={ scss.hover }
                                    name="@kyoya0819"
                                    logo={ zenn.src } width={ 120 } height={ 120 }
                                />
                            </A></li>
                            <li><A href="https://facebook.com/kyoya0819">
                                <SNS
                                    id={ scss.facebook } className={ scss.hover }
                                    name="@kyoya0819"
                                    logo={ facebook.src } width={ 120 } height={ 120 }
                                />
                            </A></li>
                            <li><SNS
                                id={ scss.discord }
                                name="@kyoya0819#0819"
                                logo={ discord.src } width={ 142 } height={ 160 }
                            /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;