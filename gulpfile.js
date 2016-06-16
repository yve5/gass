'use strict';


var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sassFolder  = 'sass/**/*.scss';
var cssFolder   = 'css';
var buildfolder = 'dist';


var compile = function (folder, style) {
  return gulp.src(sassFolder)
    .pipe(sass({outputStyle: style})
      .on('error', sass.logError))
    .pipe(gulp.dest(folder));
}


// expanded
gulp.task('expanded', function () {
  return compile(cssFolder, 'expanded');
});

gulp.task('wxc', ['expanded'], function () {
  gulp.watch(sassFolder, ['expanded']);
});


// nested
gulp.task('nested', function () {
  return compile(cssFolder, 'nested');
});

gulp.task('aze', ['nested'], function () {
  gulp.watch(sassFolder, ['nested']);
});


// compressed
gulp.task('compressed', function () {
  // return compile(buildfolder, 'compressed');
  return compile(cssFolder, 'compressed');
});

gulp.task('qsd', ['compressed'], function () {
  gulp.watch(sassFolder, ['compressed']);
});


// default
gulp.task('default', ['wxc']);