import React, { FC } from "react";

import scss from "./CreatedDetail.module.scss";

interface CreatedDetailInterface {
    title: string,
    detail: string,
    src: string
}

const CreatedDetail: FC<CreatedDetailInterface> = ({ title, detail, src }) => {

    return (
        <div className={ scss.created_detail }>
            <img className={ scss.image } src={ src } alt={ title } />
            <div className={ scss.about }>
                <div className={ scss.inner }>
                    <h4 className={ scss.title }>{ title }</h4>
                    <div className={ scss.detail }>{ detail }</div>
                </div>
            </div>
        </div>
    );
};
export default CreatedDetail;