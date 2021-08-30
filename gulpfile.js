"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require('sass'));
var concat = require("gulp-concat");
const cleanCSS = require('gulp-clean-css');
gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(concat("main.min.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./css/"));
});
