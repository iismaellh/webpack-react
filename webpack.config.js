const Path = require('path');
const Webpack = require('webpack');
const FriendlyError = require( "friendly-errors-webpack-plugin" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IsDev = (process.env.NODE_ENV !== 'production');

const plugins = [
    new FriendlyError(),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
];

if ( !IsDev ) {
    plugins.push( new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    }));

    plugins.push( new Webpack.DefinePlugin({
        IsDev: IsDev
    }));

    plugins.push( 
        new CleanWebpackPlugin(['dist'])
    );
}

/**
 * Webpack Configuration
 */
module.exports = {
    mode: IsDev ? "development" : "production",
    context: Path.join( __dirname, "src" ),
    devtool: IsDev ? "none" : "source-map",
    entry: {
        app: "./client.js",
    },
    resolve: {
        modules: ['node_modules', Path.resolve('./src')],
        extensions: [".js", ".json", ".css"]
    },
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    compact: true
                }
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: [
                        {
                        loader: 'css-loader',
                        query: {
                            localIdentName: '[hash:8]',
                            modules: true
                        }
                        }
                    ]
                })
            },

            // CSS 
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    { 
                        loader: 'style-loader' 
                    },
                    { 
                        loader: 'css-loader' 
                    },
                    { 
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                Autoprefixer({
                                    browsers: [
                                    "> 1%",
                                    "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]',
                options: {
                    name: '[path][name].[ext]'
                }
            },
        ]
    },
    plugins
};
