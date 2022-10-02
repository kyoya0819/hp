import React, { FC } from "react";

import profile from "./assets/profile.webp";

import scss from "./index.module.scss";

const About: FC = () => {

    return (
        <section className={ scss.about }>
            <div className="inner">
                <div className={ scss.contents }>
                    <div className={ scss.content }>

                        <img
                            src={ profile.src } alt="kyoya0819 / Miyako Nari"
                            width={ profile.width } height={ profile.height }
                        />
                    </div>

                    <div className={ scss.content }>
                        <h2><span>kyoya0819</span> / <span>Miyako Nari</span></h2>

                        <ul>
                            <li>2003年08月19日生まれ（19歳）</li>
                            <li>日本大学理工学部建築学科 1年</li>
                            <li>Code for Japan 学生インターン</li>
                            <li>SecSMS株式会社 エンジニア</li>
                            <li>北極と千葉を反復横跳び中</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
