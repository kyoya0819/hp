import React, { FC } from "react";

import A from "components/A";

import scss from "./Hero.module.scss";

import SNS from "components/SNS/SNS";

import logo from "images/icon.webp";

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
                            <li>
                                <A href="https://twitter.com/kyoya0819">
                                    <SNS name="twitter" hover>@kyoya0819</SNS>
                                </A>
                            </li>
                            <li>
                                <A href="https://github.com/kyoya0819">
                                    <SNS name="github" hover>@kyoya0819</SNS>
                                </A>
                            </li>
                            <li>
                                <A href="https://qiita.com/kyoya0819">
                                    <SNS name="qiita" hover>@kyoya0819</SNS>
                                </A>
                            </li>
                            <li>
                                <A href="https://zenn.dev/kyoya0819">
                                    <SNS name="zenn" hover>@kyoya0819</SNS>
                                </A>
                            </li>
                            <li>
                                <A href="https://facebook.com/kyoya0819">
                                    <SNS name="facebook" hover>@kyoya0819</SNS>
                                </A>
                            </li>
                            <li>
                                <SNS name="discord">@kyoya0819#0819</SNS>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
