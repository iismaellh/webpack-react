// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './app';

const jsx = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );