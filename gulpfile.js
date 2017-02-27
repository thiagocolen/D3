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
            './app/scripts/**/*.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./app/'));


    //css
    // gulp.src(['./src/client/assets/styles/angular-chart.css', './node_modules/angular-hotkeys/build/hotkeys.css'])
    //     .pipe(gulp.dest('./build/assets/styles/'));

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
// gulp