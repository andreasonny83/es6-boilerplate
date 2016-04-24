'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
// import concat from 'gulp-concat';
// import uglify from 'gulp-uglify';
// import rename from 'gulp-rename';
// import cleanCSS from 'gulp-clean-css';

const paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'assets/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  }
};

var AUTOPREFIXER = [
  'last 2 versions',
  'safari >= 7',
  'ie >= 9',
  'ff >= 30',
  'ios 6',
  'android 4'
];

const clean = () => {
  return del(['dist']);
}
export { clean };

const styles = () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(cssnano({
      discardComments: {removeAll: true},
      autoprefixer: {browsers: AUTOPREFIXER, add: true},
      safe: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/styles'));
};
export { styles };

const scripts = () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulp.dest('./dist/styles'));
};
export { scripts };

const build = gulp.series(clean, gulp.parallel(styles, scripts));

export { build };
export default build;
