'use strict'


const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {

    mode: 'development',
    devtool: 'eval',


  entry: './index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')

  },
  devServer: {
    // mode: 'developmeent',
        hot: true
    },
  plugins: [
      new NamedModulesPlugin(),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.ts$/, use: 'ts-loader' },
          {
            test: /\.js$/,
             loader: 'babel-loader',
             exclude: /(node_modules)/,
             query: {
                 presets: ['es2015']
             }
        }
        ]
      },
    stats: {
        colors: true
    },
    devtool: 'source-map'

};

// AngularJS + Webpack = lazyLoad https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd
