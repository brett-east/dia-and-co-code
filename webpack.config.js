const path = require('path');

const outputPath = path.join(__dirname, 'public');

module.exports = {
  entry: './app/app.js',
  output: {
    path: outputPath,
    filename: 'app.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
