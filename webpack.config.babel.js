'use strict';

const webpack = require('webpack');
const path = require('path');
const name = require('./package.json').name;
const pascalCase = require('pascal-case');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const configs = [{
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/index',
    ],
  },
  output: {
    path: `${__dirname}/bundle/`,
    filename: `${name}.js`,
    publichPath: '/public/',
    library: pascalCase(name),
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
  devtool: 'eval',
  devServer: {
    contentBase: 'release',
    noInfo: true,
    quiet: true,
  },
}];

switch (process.env.NODE_ENV) {
  case 'production':
    configs[0].plugins = [
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ];

    configs[0].devtool = '#source-map';
    break;

  default:
    configs[0].plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('bundle.css'),
    ];
    configs[0].devtool = 'inline-source-map';
}

module.exports = configs;
