import React from 'react';

import scss from './About.module.scss';

const About = () => {

    return (
        <div className={ scss.about }>
            <div className="inner">
                <h2>自己紹介 / About</h2>
                <div>
                    <p>
                        千葉県の日本大学の附属高校に通う高校3年生。2003年生まれの17歳。
                    </p>
                    <p>
                        PHP（Laravel, CakePHP）を用いたバックエンド開発が主。
                    </p>
                    <p>
                        そのほかにも、React等を用いたフロントエンド実装や、サーバー構築、ロゴ・デザイン作成、SEO対策なども経験。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;