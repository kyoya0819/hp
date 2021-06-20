import React, { FC } from "react";

import scss from "./Links.module.scss";

import twitter from "images/twitter.png";
import github from "images/github.png";
import facebook from "images/facebook.png";

import Title from "components/Title/Title";

const Links: FC = () => {

    return (
        <div className={ scss.links }>
            <div className="inner">
                <Title title="リンク / Links" />
                <ul>
                    <li><a href="https://twitter.com/kyoya0819" rel="noopener noreferrer" target="_blank"><img src={ twitter } alt="Twitter's logo" />Twitter</a></li>
                    <li><a href="https://github.com/kyoya0819" rel="noopener noreferrer" target="_blank"><img src={ github } alt="GitHub's logo" />GitHub</a></li>
                    <li><a href="https://facebook.com/kyoya0819" rel="noopener noreferrer" target="_blank"><img src={ facebook } alt="Facebook's logo" />Facebook</a></li>
                    <li><a href="https://www.resume.id/kyoya0819" rel="noopener noreferrer" target="_blank">RESUME</a></li>
                    <li><a href="https://teratail.com/users/kyoya0819" rel="noopener noreferrer" target="_blank">teratail</a></li>
                    <li><a href="https://qiita.com/kyoya0819" rel="noopener noreferrer" target="_blank">Qiita</a></li>
                    <li><a href="https://pw.kyoya0819.com/" rel="noopener noreferrer" target="_blank">PasswordMaker</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Links;