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
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    // mode: 'developmeent',
        hot: true
    },
  plugins: [
      new NamedModulesPlugin(),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin()
    ]
};

// AngularJS + Webpack = lazyLoad https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd
