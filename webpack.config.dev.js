const Path = require('path');
const Merge = require('webpack-merge');
const WebpackConfig = require('./webpack.config');

module.exports = Merge(WebpackConfig, {
    output: {
        pathinfo: true,
        publicPath: "/",
        filename: '[name].js'
    }
});
