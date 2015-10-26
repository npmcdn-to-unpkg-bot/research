module.exports = {
  entry: './js/index',
  output: {
    filename: 'bundle.js',
    library: 'LameMath',
    libraryTarget: 'umd'
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
};
