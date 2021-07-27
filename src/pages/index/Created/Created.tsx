import React, { FC } from "react";

import Title from "components/Title/Title";
import CreatedDetail from "./components/CreatedDetail";

import aclass from "images/aclass.webp";
import farmers from "images/farmers.webp";
import wolf from "images/wolf.webp";

import scss from "./Created.module.scss";

const Created: FC = () => {

    return (
        <section className={ scss.created }>
            <div className="inner">
                <Title>制作物 / Created</Title>
                <div className={ scss.created_list }>
                    <CreatedDetail title="Aclass" detail="新型コロナウィルス感染法の休校期間中に完全にノリで作った、教育用プラットフォーム。" src={ aclass } />
                    <CreatedDetail title="株式会社FARMER'S HP" detail="株式会社FARMER'Sからの依頼で作成したHP。現在は別のに置き換わってます。" src={ farmers } />
                    <CreatedDetail title="？？？" detail="現在鋭意製作中" src={ wolf } />
                </div>
            </div>
        </section>
    );
};
export default Created;