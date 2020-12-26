import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from './Route';

import Header from './components/header';
import Index from './pages/index';
import Create from './pages/create/single';
import NotFound from './pages/404';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route exact path={route('index')} component={Index} />
                        <Route path={route('create:id')} component={Create} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
