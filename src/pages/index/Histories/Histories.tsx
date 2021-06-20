import React, { FC } from "react";

import scss from "./Histories.module.scss";

import Title from "components/Title/Title";
import histories_json from "data/histories.json";

const Histories: FC = () => {

    const histories_object: {[key: string]: string} = histories_json;

    return (
        <div className={ scss.history }>
            <div className="inner">
                <Title title="経歴 / Histories" />
                <ul className={ scss.list }>{
                    Object.keys(histories_object).map((key) => {
                        return <History year={key} content={histories_object[key]} key={ key } />;
                    })
                }</ul>
            </div>
        </div>
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
