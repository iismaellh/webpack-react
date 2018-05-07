import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import App from './app';
import Routes from "./routes";
import Template from "./containers/Template";

const app = express();

require('babel-core/register')({
    presets: ['es2015', 'react']
  });
  require.extensions['.scss'] = () => {
    return;
  };
  require.extensions['.css'] = () => {
    return;
  };

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const context = { };

    const data = 
            Routes
                .filter( route => matchPath( req.url, route ) )
                 .map( route => route.component );

                
    Promise.all( data )
        .then( (state) => {
            console.log(state);

            const jsx = (
                <StaticRouter context={ context } location={ req.url }>
                    <App />
                </StaticRouter>
            );

            const dom = renderToString( jsx );

            res.writeHead( 200, { "Content-Type": "text/html" } );
            res.end( Template( dom ) );
        })
        .catch((error) => {
            console.log(error);
            done();
        });
});

app.listen( 2048 );
