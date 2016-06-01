'use strict';

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.babel.js');
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  publicPath: config[0].output.publicPath,
  hot: true,
  historyApiFallback: true,
});

server.listen(8080);

