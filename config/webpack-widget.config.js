const { resolve } = require('path');
const config = require('./webpack.config');

const originalConfig = config('development');

module.exports = {
  mode: 'development',
  entry: {
    widget: ['./src/widget.js'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../dist'),
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  resolve: originalConfig.resolve,
  module: originalConfig.module,
};
