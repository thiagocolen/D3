var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    clean = require('gulp-clean'),
    concat = require('gulp-concat');


// WWW Folder
gulp.task('build', function() {

    // scripts
    gulp.src([
            './node_modules/d3/build/d3.js',
            './node_modules/material-design-lite/dist/material.min.js',
            './app/scripts/**/*.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./app/'));

    //css
    gulp.src([
            './node_modules/material-design-lite/dist/material.min.css',
            './app/styles/**/*.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./app/'));
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        },
        open: false
    });
});


gulp.task('default', ['browser-sync'], function() {
    gulp.watch(['./app/**/*'], ['build', reload]);
});


// execute:
// gulp build default