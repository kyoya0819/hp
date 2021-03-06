import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import route from './../Route';
import './header.scss';
import { useTranslation } from "react-i18next";

const Header = () => {
    const [, i18n] = useTranslation();
    const [lang, setLang] = useState('ja');

    useEffect(() => {
        i18n.changeLanguage(lang).then(() => {});
    }, [lang, i18n]);

    return (
        <header>
            <div className="inner">
                <h1>
                    <Link to={route('index')}>kyoya0819</Link>
                </h1>
                <nav>
                    <ul>
                        <li onClick={() => setLang('ja')}>ja</li>
                        <li>/</li>
                        <li onClick={() => setLang('en')}>en</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;