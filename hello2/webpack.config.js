var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: `${__dirname}/src`,
  entry: `${__dirname}/src/app.js`,
  output: {
    path: __dirname,
    filename: 'static/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
