import React, { Component } from 'react';

import scss from './Error404.module.scss';

class App extends Component {
    render() {
        document.title = "kyoya0819 | NotFound";
        return (
            <div className={`inner ${ scss.center }`}>
                存在しません。<br />
                Not Found.
            </div>
        );
    }
}

export default App;