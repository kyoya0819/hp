import React, { FC } from "react";

import Title from "components/Title/Title";
import CreatedDetail from "./components/CreatedDetail";

import aclass from "images/aclass.webp";
import farmers from "images/farmers.webp";
import veebo from "images/veebo.webp";
import wolf from "images/wolf.webp";

import scss from "./Created.module.scss";

const Created: FC = () => {

    return (
        <section className={ scss.created }>
            <div className="inner">
                <Title>制作物 / Created</Title>
                <div className={ scss.created_list }>
                    <CreatedDetail
                        title="Aclass" src={ aclass }
                        detail="新型コロナウィルス感染法の休校期間中に完全にノリで作った、教育用プラットフォーム。"
                    />
                    <CreatedDetail
                        title="株式会社FARMER'S HP" src={ farmers }
                        detail="株式会社FARMER'Sからの依頼で作成したHP。現在は別のに置き換わってます。"
                    />
                    <CreatedDetail
                        title="株式会社FARMER'S veebo" src={ veebo }
                        detail="株式会社FARMER'Sからの依頼で作成したECテンプレート。1週間という限られ他期間で開発。現在は別のに置き換わってます。"
                    />
                    <CreatedDetail title="？？？" detail="現在鋭意製作中" src={ wolf } />
                </div>
            </div>
        </section>
    );
};
export default Created;