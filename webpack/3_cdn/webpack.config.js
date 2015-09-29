module.exports = {
  entry: './js/index',
  output: {
    filename: 'bundle.js'
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
  resolve: {

    // makes webpack understand requires with .jsx extension as well as with no one at all
    extensions: ['', '.js', '.jsx']
  },

  // doesn't include react in the bundle, searches in global (window) instead
  externals: {
    react: 'React'
  }
};
