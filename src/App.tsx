import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from './Route';

import Header from './components/header';
import Footer from "./components/footer";
import CreateIndex from './pages/create/index';
import CreateSingle from './pages/create/single';
import About from './pages/about/index';
import NotFound from './pages/404';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route component={Header} />
                </Switch>
                <div id="main">
                    <main>
                        <Switch>
                            <Route exact path={route('index')} />
                            <Route exact path={route('about')} component={About} />
                            <Route exact path={route('create')} component={CreateIndex} />
                            <Route path={route('create:id')} component={CreateSingle} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
