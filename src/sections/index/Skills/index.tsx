import React, { FC } from "react";

import scss from "./index.module.scss";

const Skills: FC = () => {

    return (
        <section className={ scss.skills }>
            <div className="inner">

                <h2>Skills</h2>
                <p>
                    WEB領域が大好物です。
                </p>

                <ul>
                    <li>
                        <div className={ scss.tag }>React, Next.js</div>
                        <div>👍👍👍👍👍</div>
                    </li>
                    <li>
                        <div className={ scss.tag }>Laravel</div>
                        <div>👍👍👍👍👍</div>
                    </li>
                    <li>
                        <div className={ scss.tag }>React Native</div>
                        <div>👍👍👍👍</div>
                    </li>
                    <li>
                        <div className={ scss.tag }>Vue.js, Nuxt.js</div>
                        <div>👍👍👍👍</div>
                    </li>
                    <li>
                        <div className={ scss.tag }>Python</div>
                        <div>👍👍👍👍</div>
                    </li>
                    <li>
                        <div className={ scss.tag }>Go</div>
                        <div>👍👍👍</div>
                    </li>
                    <li>
                        <div className={ scss.tag }>Ruby on Rails</div>
                        <div>👍👍👍</div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Skills;