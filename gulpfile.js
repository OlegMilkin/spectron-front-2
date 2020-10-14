'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const gulpSequence = require('gulp-sequence');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require("gulp-concat");

var isDevelopment = true;

gulp.task('styles', function () {
  return gulp.src('src/scss/app.scss')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(gulpIf(isDevelopment == true, sass({outputStyle: ''})))
    .pipe(gulpIf(isDevelopment == false, sass({outputStyle: 'compressed'})))
    .on('error', notify.onError())
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(rename({basename: 'app'}))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('scripts', function(){
  gulp.src('src/js/app.js')
    .pipe(babel({presets: ['env']}))
    .pipe(uglify())
    .pipe(rename({basename: 'app.min'}))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('clean', function () {
  return del(['dist/css', 'dist/js']);
});

gulp.task('build', function (callback) {
  gulpSequence('clean', 'styles', 'scripts')(callback)
});

gulp.task('watch', function () {
  gulp.watch(['src/scss/**/*.*', 'src/js/**/*.*'], ['styles', 'scripts']);
});

gulp.task('dev', function (callback) {
  gulpSequence('build', 'watch')(callback)
});

gulp.task('prod', function (callback) {
  isDevelopment = false;
  gulpSequence('build')(callback)
});

gulp.task('default', ['dev']);