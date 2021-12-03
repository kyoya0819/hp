import React, { FC, useEffect } from "react";

import top from "./scripts/top";

import scss from "./Histories.module.scss";

import histories from "data/histories/histories";

const Histories: FC = () => {

    useEffect(() => {

        top(scss.event);

        window.addEventListener("resize", () => top(scss.event));
        return () => window.removeEventListener("resize", () => top(scss.event));
    }, []);

    let key = 0;
    return (
        <section>
            <div className="inner">
                <div className={ scss.histories }>

                    <h2>Histories</h2>

                    <ul className={ scss.years }>{
                        Object.keys(histories()).map((year, index) => {
                            return (
                                <li key={ index } className={ scss.event }>
                                    <b>{ year }年</b>
                                    <ul className={ scss.events}>{
                                        histories()[year].map((value: string) => {
                                            key++;
                                            return <li key={ key }>{ value }</li>;
                                        })
                                    }</ul>
                                </li>
                            );
                        })
                    }</ul>
                </div>
            </div>
        </section>
    );
};
export default Histories;