import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Origin from './containers/Origin';
import asyncComponent from './hoc/asyncComponent';

const AsyncComponent = asyncComponent(() => {
    return import('./containers/Async.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Origin</Link> | <Link to="/generic">Async</Link>
                </div>
                <div>
                    <Route path="/" exact component={Origin} />
                    <Route path="/generic" component={AsyncComponent} />
                </div>
            </div>
        );
    }
}

export default App;