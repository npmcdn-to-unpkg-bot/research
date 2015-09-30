var webpack = require('webpack');

module.exports = {
  entry: './js/index',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: true,
      VERSION: JSON.stringify("1.0.0")
    })
  ]
};
