'use strict';

// requirements
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();


// configurable paths
var config = {
  sass: 'sass/**/*.scss',
  css: 'css',
  dist: 'dist'
};


// css generation
// styles : expanded, nested, compressed
var compile = function(input, output, style) {
  return gulp.src(input)
      .pipe($.sass.sync({
        outputStyle: style,
        includePaths: ['.'],
        precision: 10
      }).on('error', $.sass.logError))
      .pipe(gulp.dest(output));
}


// development generation
gulp.task('dev', function () {
  compile(config.sass, config.css, 'expanded');
});


// sass file watch
gulp.task('watch', ['dev'], function () {
  gulp.watch(config.sass, ['dev']);
});


// build
gulp.task('build', function () {
  compile(config.sass, config.dist, 'compressed');
});


// default task
gulp.task('default', ['watch']);