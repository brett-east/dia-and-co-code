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
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'app/'),
      Components: path.resolve(__dirname, 'app/components/'),
      Pages: path.resolve(__dirname, 'app/pages/')
    }
  },
  devtool: 'source-map'
};
