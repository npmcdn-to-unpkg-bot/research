var path = require('path');
// console.log(path.resolve(__dirname, 'js/some/deep/nested/folder'));

module.exports = {
  entry: './js/index',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
      alias: {
          'test-alias': path.resolve(__dirname, 'js/some/deep/nested/folder')
      }
  }
};
