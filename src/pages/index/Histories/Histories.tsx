import React, { FC } from "react";

import scss from "./Histories.module.scss";

import Title from "components/Title/Title";
import histories_json from "data/histories.json";

const Histories: FC = () => {

    const histories_object: {[key: string]: string[]} = histories_json;

    return (
        <section className={ scss.history }>
            <div className="inner">
                <Title>経歴 / Histories</Title>
                <ul className={ scss.list }>{
                    Object.keys(histories_object).map((key) => {
                        return histories_object[key].map((value) => {
                            return <History year={key} content={value} key={ key } />;
                        });
                    })
                }</ul>
            </div>
        </section>
    );
};


interface HistoryInterface {
    year: string,
    content: string
}

const History: FC<HistoryInterface> = ({ year, content }) => {
    return <li>{year}年 - {content}</li>;
};

export default Histories;
