import React, { Component } from 'react';

import CreateCard from './../components/index/create-card';
import projects from './../data/projects.json';

import './index.scss';

import moment from 'moment';
import 'moment-timezone';

class App extends Component {

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
                <section>
                    <h3>ABOUT</h3>
                    <div className="left">
                        <p>日本に住む、{this.year()}歳のシロクマ。</p>
                        <p>PHP大好きの生粋のPHPer。</p>
                        <p>普段はバックエンドが主、デザイン・ロゴ作成もしばしば。</p>
                    </div>
                </section>
                <section>
                    <h3>CREATE</h3>
                    <ul id="creates">
                        { projects.map((project, i) => <CreateCard key={i} idNum={i+1} data={project} />) }
                    </ul>
                </section>
            </div>
        );
    }
}

export default App;