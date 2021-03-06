import React, { Component } from 'react';

import skills from './../data/skills.json';

import './index.scss';

import moment from 'moment';
import 'moment-timezone';
import { useTranslation } from "react-i18next";

const year = () => {
    moment.tz.setDefault('Asia/Tokyo');

    const now_year = moment().year();
    const birth_year = 2003;

    const now_date = Number(moment().month() + 1 + '' + moment().date());
    const birth_date = 819;

    if (now_date >= birth_date)
        return now_year - birth_year;
    else
        return now_year - birth_year - 1;
}

const Index = () => {
    const { t } = useTranslation();

    document.title = "kyoya0819 | TOP";

    return (
        <div className="inner">
            <section>
                <h3>ABOUT</h3>
                <div className="left">
                    <p>{ t('日本に住む、{{year}}歳のシロクマ。', { year: year() }) }</p>
                    <p>{ t('PHP大好きの生粋のPHPer。') }</p>
                    <p>{ t('日本大学の附属高校の生徒。')}</p>
                    <p>{ t('普段はバックエンドが主、デザイン・ロゴ作成もしばしば。') }</p>
                </div>
            </section>
            <section>
                <h3>PROGRAMMING SKILLS</h3>
                <ul className="skills">
                    { skills.programming.map((name, i) => <li key={ i }><span>{ name }</span></li>) }
                </ul>
            </section>
            <section>
                <h3>OTHER SKILLS</h3>
                <ul className="skills">
                    { skills.other.map((name, i) => <li key={ i }><span>{ name }</span></li>) }
                </ul>
            </section>
            <section>
                <h3>LINKS</h3>
                <ul id="links">
                    <li><a href="https://twitter.com/kyoya0819" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100054776536464" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a href="https://github.com/kyoya0819" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://www.resume.id/kyoya0819" target="_blank" rel="noreferrer">RESUME</a></li>
                    <li><a href="https://teratail.com/users/kyoya0819" target="_blank" rel="noreferrer">teratail</a></li>
                    <li><a href="https://qiita.com/kyoya0819" target="_blank" rel="noreferrer">Qiita</a></li>
                    <li><a href="https://pw.kyoya0819.com/" target="_blank" rel="noreferrer">PasswordMarker</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Index;