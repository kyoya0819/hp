import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import route from 'Route';

import Index from 'pages/index/Index';
import NotFound from 'pages/Error404/Error404';

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ route('index') } component={ Index } />
                <Route component={ NotFound } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
