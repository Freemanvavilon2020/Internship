const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
    app1: './app1.js',
    app2: './app2.js',
    app3: ['babel-polyfill', './app3.js']
  },
  output: {
    path: path.resolve(__dirname, './public/scripts'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'es2016', 'stage-0'] }
          }
        ]
      }
    ]
  }
};