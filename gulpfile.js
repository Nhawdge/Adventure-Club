var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var ts = require('gulp-typescript');

gulp.task("default", function () {
  return gulp.src("js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["babel-preset-env"]
    }))
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/bundles"));
});


gulp.task('ts', function () {
  gulp.src('js/**/*.ts')
    .pipe(ts({
      //noImplicitAny: true,
      //outFile: 'output.js'
    }))
    .pipe(gulp.dest('js/ts/'));
  return gulp.src("js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["babel-preset-env"]
    }))
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/bundles"));
});