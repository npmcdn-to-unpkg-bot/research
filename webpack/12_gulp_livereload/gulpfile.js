var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', function() {
    livereload.listen();
    var compiler = webpack(webpackConfig);
    compiler.watch({}, function(err, stats) {
        if (err) {
            console.log(err);
            throw err;
        }

        console.log(stats.toString({colors: true}));
        livereload.reload();
    });
});
