import React, { Component } from 'react';

import './index.scss';

import moment from 'moment';
import 'moment-timezone';

export default class App extends Component {

    year = () => {
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

    render() {
        document.title = "kyoya0819 | TOP";
        return (
            <div className="inner">
                <h2 className="h2">ABOUT</h2>
                <section>
                    <h3 className="h3">kyoya0819</h3>
                    <img src={"/images/icon.jpeg"} alt="kyoya0819" id="kyoya0819" />
                    <div className="left">
                        <p>
                            はじめまして、kyoya0819（京也）と申します。 日本在住の{this.year()}歳の高校生です。<br />
                            バックエンドが主ですが、環境構築・フロントエンド・デザイン・ロゴ作成も請け負うことがあります。<br />
                            普段はフリーランスとして案件ごとに転々とする実です。<br />
                            よろしくお願いいたします。
                        </p>
                    </div>
                </section>
                <section>
                    <h3>「きっかけ」と「今」と「これから」</h3>
                    <div className="left">
                        <p>
                            プログラミングを始めたのは、小学校4年生の時にYahoo! JAPANを見て「こんなのが作りたい！」と思ったのがきっかけです。
                            小学時代はBookOFFで買った本で学習していました。
                            中学時代はあまりプログラミングをやらなかったのですが、この頃WordPressを使い始めたことがきっかけでPHPにひかれ始めました。
                            高校時代になってから本格的にプログラミングをはじめ、PHPのフレームワークであるCakePHPを学習。その後別件でLaravelを使うことが決まったのでLaravelの学習をしました。
                            フロントエンドについても、東京都新型コロナウィルス特設サイトの開発を期にNuxt.js, Vue.js, React.jsと学習してきました。
                        </p>
                        <p>
                            今現在個人的には、フロントエンドではReact、バックエンドではLaravelが好きです。
                            Goにものすごく興味があります。
                        </p>
                        <p>
                            これからは、Goを学習していきたいと考えています。
                            おそらくその前に大学入試が入ってくるのでプログラミングができない期間ができてしまうとは思いますが頑張りたいと思います。
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}