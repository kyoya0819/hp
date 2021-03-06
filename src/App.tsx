import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from './Route';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import Header from './components/header';
import Index from './pages/index';
import NotFound from './pages/Error404';

import translate_en from './data/en.json';
import translate_ja from './data/ja.json';

import './App.scss';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translate_en
        },
        ja: {
            translation: translate_ja
        },
    },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {escapeValue: false},
}).then(() => {});

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route exact path={route('index')} component={Index} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
