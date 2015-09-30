var webpack = require('webpack');

module.exports = {
  entry: {
    home: './js/home',
    about: './js/about'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
  ]
};
