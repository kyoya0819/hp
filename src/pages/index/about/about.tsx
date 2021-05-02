import React from 'react';
import moment from "moment";
import { useTranslation } from "react-i18next";

import scss from './about.module.scss';

const year = () => {
    moment.tz.setDefault('Asia/Tokyo');

    const now_year = moment().year();
    const [birth_year, birth_date] = [2003, 819];

    const now_date = Number(moment().month() + 1 + '' + moment().date());

    if (now_date >= birth_date)
        return now_year - birth_year;
    else
        return now_year - birth_year - 1;
}

const About = () => {

    const { t } = useTranslation();

    return (
        <section>
            <h2>ABOUT</h2>
            <div className={ scss.left }>
                <p>{ t('日本に住む、{{year}}歳のシロクマ。', { year: year() }) }</p>
                <p>{ t('PHP大好きの生粋のPHPer。') }</p>
                <p>{ t('日本大学の附属高校の生徒。')}</p>
                <p>{ t('普段はバックエンドが主、デザイン・ロゴ作成もしばしば。') }</p>
            </div>
        </section>
    );
}

export default About;