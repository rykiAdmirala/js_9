var gulp = require('gulp');
var pump = require('pump');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('scripts', function(cb) {
  pump([
        gulp.src('src/**/*.js'),
        concat('scripts.min.js'),
        uglify(),
        gulp.dest('dist/js/')
    ],
    cb
  );
});

gulp.task('css', function(cb) {
  pump([
        gulp.src('src/**/*.css'),
        concat('styles.min.css'),
        cleanCSS(),
        gulp.dest('dist/css/')
    ],
    cb
  );
});

gulp.task('default', ['scripts', 'css']);