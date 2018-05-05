import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Another from './containers/Another';
import asyncComponent from './hoc/asyncComponent';

const AsyncGeneric = asyncComponent(() => {
    return import('./containers/Generic.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Another</Link> | <Link to="/generic">Generic</Link>
                </div>
                <div>
                    <Route path="/" exact component={Another} />
                    <Route path="/generic" component={AsyncGeneric} />
                </div>
            </div>
        );
    }
}

export default App;