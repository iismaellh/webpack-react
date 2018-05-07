import React from 'react';
import { Link, Route } from 'react-router-dom';

import Origin from './containers/Origin';
import Async from './containers/Async';

class App extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Origin</Link> | <Link to="/async">Async</Link>
                </div>
                <div>
                    <Route path="/" exact component={Origin} />
                    <Route path="/async" component={Async} />
                </div>
            </div>
        );
    }
}

export default App;