import React, { FC } from "react";

import scss from "./Hero.module.scss";

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

                        <div className={ scss.description }>

                            <p>
                                千葉県の高校に通う18歳です。<br />
                                主にWEB系の開発が得意/好きで、最近は機械学習に興味を持ち始めてます。
                            </p>

                            <p>
                                プログラミングに興味を持ち始めたのは、小学校4年生の時です。<br />
                                Yahoo! JAPANのようなサイトを作りたい！と思うようになったのが一番のきっかけです。<br />
                                <small>今は、Googleしか使ってないです。</small>
                            </p>

                            <p>
                                プログラミング以外の特技は、ピアノと苗字を間違えられることです。
                            </p>

                            <p>
                                普段は、物理, 化学を重点的に勉強しています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;