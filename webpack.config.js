'use strict'


const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
        hot: true
    },
  plugins: [
      new NamedModulesPlugin(),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin()
    ]
};

// AngularJS + Webpack = lazyLoad https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd
