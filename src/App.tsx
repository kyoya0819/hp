import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from './Route';

import Index from './pages/index/Index';
import NotFound from './pages/Error404';

import Footer from './components/Footer/Footer';

const App = () => {

    return (
        <Router>
            <main >
                <Switch>
                    <Route exact path={route('index')} component={Index} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
