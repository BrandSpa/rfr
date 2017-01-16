'use strict';
const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const browserify = require("browserify");
const babelify = require("babelify");
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

//npm install -S fs gulp gulp-sass gulp-babel browserify babel babel-preset-es2015 babelify gulp-autoprefixer gulp-uglify vinyl-source-stream vinyl-buffer
gulp.task('admin', () => {
  browserify("./client/admin/app.js")
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream("public/js/admin.js"));
});

gulp.task('app', () => {
  browserify("./client/app.js")
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(source('app.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('admin:watch', function () {
  gulp.watch('./client/admin/**/*.js', ['admin']);
});

gulp.task('app:watch', function () {
  gulp.watch('./client/**/*.js', ['app']);
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
