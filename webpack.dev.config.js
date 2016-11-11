'use strict';


var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
            { test: /\.rt/, exclude: /node_modules/, loaders: ["react-templates-loader?targetVersion=0.14.0"] },
            { test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'resolve-url', 'sass'] }
        ]
    }
};
