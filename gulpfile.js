'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var moduleImporter = require('sass-module-importer');


gulp.task('sass', function () {
  return gulp.src('./app/sass/*.scss')
    .pipe(sass({ importer : moduleImporter() }).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/*.scss', ['sass']);
});