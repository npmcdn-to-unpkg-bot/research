module.exports = {
  entry: './js/index',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /.jsx?$/, loader: 'babel'}
    ]
  },
  resolve: {

    // makes webpack understand requires with .jsx extension as well as with no one at all
    extensions: ['', '.js', '.jsx'] 
  }
};
