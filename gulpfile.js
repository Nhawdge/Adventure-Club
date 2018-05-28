var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var typescript = require("babel-preset-typescript")

gulp.task("default", function () {
  return gulp.src("js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(typescript())
    .pipe(babel({
      presets: ["typescript", "babel-preset-env"]
    }))
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/bundles"));
});