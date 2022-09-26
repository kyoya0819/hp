import React, { FC, useEffect, useState } from "react";

import kyoya0819 from "./assets/kyoya0819.webp";
import miyako_nari from "./assets/miyako_nari.webp";

import scss from "./index.module.scss";

const Hero: FC = () => {

    const [height, setHeight] = useState<number>();

    useEffect(() => {

        const getHeight = () => setHeight(window.innerHeight);

        getHeight();

        window.addEventListener("resize", getHeight);
        return () => window.removeEventListener("resize", getHeight);
    }, []);

    return (
        <>
            <section>
                <div  className={ scss.hero } style={height ? {
                    height: height + "px"
                } : {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: "calc((100vh - 100%) / 2)"
                }}>
                    <div className="inner">
                        <h1>
                            <img src={ kyoya0819.src } width={ kyoya0819.width } height={ kyoya0819.height } alt="kyoya0819" />
                            <span />
                            <img src={ miyako_nari.src } width={ miyako_nari.width } height={ miyako_nari.height } alt="Miyako Nari" />
                        </h1>
                    </div>
                </div>
                { height ? <></> : <div className={ scss.space } /> }
            </section>
        </>
    );
};
export default Hero;