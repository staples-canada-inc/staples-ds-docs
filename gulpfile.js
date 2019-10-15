let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let gulpUtil = require('gulp-util');
let sassGlob = require('gulp-sass-glob');
// del = require('del');
const config = require('./gulp.config');

// gulp.task('default', function () {
//     return gulp.watch('./contents/components/**/*', gulp.series('clean', 'sass'));
// });

// gulp.task('clean', function () {
//     return del(['./src/styles/design-system/staples-ds.css']);
// });

gulp.task('sass', () => {
    return gulp.src(config.sass.src)
        .pipe(sassGlob())
        //.pipe(isProd() ? sass({ outputStyle: 'compressed' }) : sass())
        .pipe(sass({ outputStyle: 'compressed' }))
        .on('error', error => console.log(error))
        .pipe(rename('staples-ds.min.css'))
        .pipe(gulp.dest(config.buildLocations.css));
})

function isProd() {
    return gulpUtil.env.type === 'production';
}