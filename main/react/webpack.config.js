const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
var package     = require('./package.json');

const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
    entry: ['@babel/polyfill', APP_DIR],
    devServer: {
        contentBase: path.join(__dirname, '../static/main/'),
        compress: true,
        port: 9000,
        stats: "minimal",
        watchContentBase: true,
        historyApiFallback: true,
        open: false,
        hot: false
    },
    output: {
        path: path.join(__dirname, "../dist/"),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
  watch: true,
  module: {
    rules: [
        {
            test: /.\js$/,
            loader: ['babel-loader'],
            exclude:[/node_modules/],
        },
        {
            test: /\.css$/,
            include: /stylesheets|node_modules|src/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.scss$/,
            include: /stylesheets/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                publicPath: '/static/apidemos',
            }
        }
    ]
  }
};