const Path = require('path')
const Merge = require('webpack-merge');
const WebpackConfig = require('./webpack.config');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = Merge(WebpackConfig, {
    output: {
        path: Path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },

    optimization: {
        minimizer: [ new UglifyJSPlugin() ]
    }
});
