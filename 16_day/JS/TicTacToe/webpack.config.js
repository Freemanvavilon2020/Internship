const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './handlers.js',
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js',
  },
};