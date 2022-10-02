import React, { FC } from "react";

import kyoya0819 from "./assets/kyoya0819.webp";
import miyako_nari from "./assets/miyako_nari.webp";

import scss from "./index.module.scss";

const Hero: FC = () => {

    return (
        <section>
            <div className={ scss.hero }>
                <div className="inner">
                    <h1>
                        <img src={ kyoya0819.src } width={ kyoya0819.width } height={ kyoya0819.height } alt="kyoya0819" />
                        <span />
                        <img src={ miyako_nari.src } width={ miyako_nari.width } height={ miyako_nari.height } alt="Miyako Nari" />
                    </h1>
                </div>
            </div>
        </section>
    );
};
export default Hero;