import React, { FC } from "react";

import scss from "./index.module.scss";

const Slides: FC = () => {

    return (
        <section className={ scss.slides }>
            <div className="inner">

                <h2>Slides</h2>
                <p>
                    完全に書くのをサボっているので頑張って作りたいです。
                </p>

                <ul>
                    <li>
                        <iframe
                            title="ブラック企業での生き方" loading="lazy"
                            src="https://speakerdeck.com/player/a2287a1e96554d3894826127ba4a3625"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Slides;