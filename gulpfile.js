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


gulp.task('compile', function () {
  return compile(cssFolder, 'expanded');
});


gulp.task('build', function () {
  return compile(buildfolder, 'compressed');
});


gulp.task('watch', ['compile'], function () {
  gulp.watch(sassFolder, ['compile']);
});


gulp.task('default', ['watch']);