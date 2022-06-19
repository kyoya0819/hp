import React, { FC } from "react";

import Video from "components/Video";

import scss from "./Hero.module.scss";

const Hero: FC = () => {

    return (
        <section className={ scss.hero }>
            <Video className={ scss.video } width={ 1920 } height={ 1080 } />
        </section>
    );
};
export default Hero;
