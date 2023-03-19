import React, { FC } from "react";

import scss from "./index.module.scss";

const Slides: FC = () => {

    const slides =  [
        {
            title: "ブラック企業での生き方",
            src: "https://speakerdeck.com/player/a2287a1e96554d3894826127ba4a3625"
        }
    ];

    return (
        <section className={ scss.slides }>
            <div className="inner">

                <h2>Slides</h2>
                <p>
                    完全に書くのをサボっているので頑張って作りたいです。
                </p>

                <ul>
                    {
                        slides.map((slide, i) => {

                            return (
                                <li key={ i }>
                                    <iframe
                                        title={ slide.title }
                                        src={ slide.src }
                                        loading="lazy"
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
};
export default Slides;