const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(webpackConfig, {

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    optimization: {
    minimizer: [
        new UglifyJSPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            }),
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]

});
