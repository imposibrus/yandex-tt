
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    gulpFilter = require('gulp-filter'),
    browserSync = require('browser-sync').create(),
    sourceMaps = require('gulp-sourcemaps'),
    postCSS = require('gulp-postcss'),
    autoPrefixer = require('autoprefixer'),
    webpackStream = require('webpack-stream'),
    webpackConfig = require('./webpack.config');

gulp.task('stylus', function () {
  var cssOnlyFilter = gulpFilter(function(file) {
    return /.css$/.test(file.path);
  });
  return gulp.src(['css/main.styl'])
      .pipe(sourceMaps.init())
      .pipe(stylus())
      .pipe(postCSS([ autoPrefixer({ browsers: ['> 2% in RU', 'ie 10', 'last 5 versions'] }) ]))
      .pipe(sourceMaps.write('./'))
      .pipe(gulp.dest('build/'))
      .pipe(cssOnlyFilter)
      .pipe(browserSync.stream());
});

gulp.task('webpack', function() {
  return gulp.src('js/main.js')
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('build'));
});

gulp.task('watch', function(cb) {
  browserSync.init({
    notify: false,
    https: false,
    open: false,
    server: true
  }, cb);

  process.on('exit', function() {
    browserSync.exit();
  });

  gulp.watch('css/**/*.styl', ['stylus']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/*.js', ['webpack']);
  gulp.watch('build/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['stylus', 'webpack']);
