const gulp = require('gulp');;
//const sass = require('gulp-sass'); //for preprocessors
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
//const uglify = require('gulp-uglify'); //for optimise js
const del = require('del');
const browserSync = require('browser-sync').create();
var pxtorem = require('gulp-pxtorem');

//static-server
/*gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }

    });
});*/

//next rows... just allow to be here, it is for ПЭ-ХЕ-ПЭ'ШНИКОВ

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });
function styles(){
    return gulp.src(['./node_modules/normalize.css/normalize.css','./node_modules/reset-css/reset.css', './src/**/*.css'])
        .pipe(concat('all.css'))
        .pipe(autoprefixer({cascade: false,
            overrideBrowserslist: ['last 2 versions']}))
        .pipe(cleanCSS({level: 2}))
        .pipe(pxtorem())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
};

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        tunnel: "test-test"
    });
    gulp.watch('./src/css/**/*.css', styles);
    gulp.watch(['./*.html', './*.js']).on('change', browserSync.reload);
}

function clean() {
   return del(['build/*']);
}
gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, styles));
gulp.task('dev', gulp.series('build', 'watch'));