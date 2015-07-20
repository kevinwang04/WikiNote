var gulp = require('gulp'),

  //////////////////
  // Dependencies //
  //////////////////

  // Prepocessing
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  autoprefixer = require('gulp-autoprefixer'),

  // Error Handling
  plumber = require('gulp-plumber'),

  // Easy Development :D
  karmaServer = require('karma').Server,
  connect = require('gulp-connect');

//////////////////////////////
// Simple Livereload Server //
//////////////////////////////

gulp.task('live-server', function() {
  connect.server({
    root: 'app',
    port: 8888,
    livereload: true
  });
});

//////////////////
// Default Task //
//////////////////

gulp.task('default', [
  'live-server',
  'script',
  'style',
  'tdd',
  'watch'
]);

/////////////////////
// HTML Autoreload //
/////////////////////

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//////////////////////////
// Script Related Tasks //
//////////////////////////

gulp.task('script', function() {
  gulp.src('app/src/**/*.js')
    .pipe(plumber())
    // .pipe(uglify())
    // .pipe(gulp.dest('app/script/min/'))
    .pipe(connect.reload());
});

//////////////////////////
// Style Releated Tasks //
//////////////////////////

gulp.task('style', function() {
  gulp.src('app/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css/'))
    .pipe(connect.reload());
});

/////////////////////////
// Image Optimise Taks //
/////////////////////////

gulp.task('image', function() {
  gulp.src('app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/img/build/'));
});

//////////
// Test //
//////////

gulp.task('test', function(done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }).start();
});

gulp.task('tdd', function(done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
  }).start();
});

/////////////////
// Watch Tasks //
/////////////////

gulp.task('watch', function() {
  gulp.watch('app/**/**/*.js', ['script', 'tdd']);
  gulp.watch('app/scss/**/*.scss', ['style']);
  gulp.watch('app/*.html', ['html']);
});
