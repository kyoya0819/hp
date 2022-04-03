import React, { FC } from "react";

import SNS from "components/SNS/SNS";
import A from "components/A";

import scss from "./Hero.module.scss";

const Hero: FC = () => {

    return (
        <section className={ scss.hero }>
            <div className="inner">
                <p>ご連絡等は以下の方法でお願いいたします。</p>

                <ul className={ scss.links }>
                    <li>
                        <A href="https://twitter.com/kyoya0819">
                            <SNS name="twitter" hover>
                                @kyoya0819
                            </SNS>
                        </A>
                    </li>
                    <li>
                        <SNS name="discord">
                            @kyoya0819#0819
                        </SNS>
                    </li>
                    <li>
                        <SNS name="email" onClick={ () => {
                            window.open("mailto:kyoya0819@gmail.com", "Mail");
                        } } hover>
                            kyoya0819@gmail.com
                        </SNS>
                    </li>

                </ul>
            </div>
        </section>
    );
};
export default Hero;
