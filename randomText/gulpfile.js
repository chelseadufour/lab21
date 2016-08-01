// 'use strict';
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync');
// gulp.task('sass', function () {
// return gulp.src('./sass/**/*.scss')
// .pipe(sass().on('error', sass.logError))
// .pipe(gulp.dest('./css'));
// });
// gulp.task('sass:watch', function () {
// gulp.watch('./sass/**/*.scss', ['sass']);
// });
//
// gulp.task('browser-sync', function () {
// 	browserSync.init({
// 		server: {
// 			baseDir: "./"
// 		}
// 	});
// 	gulp.watch("./*.html").on('change', browserSync.reload);
// 	gulp.watch("./*.css").on('change', browserSync.reload);
// 	gulp.watch("./*.js").on('change', browserSync.reload);
// })
var gulp = require('gulp');
var karma = require('karma').Server;

gulp.task('test', function(done){
  new karma({
      configFile: __dirname + '/karma.conf.js'
    }, done).start();
});
