let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let gulpUtil = require('gulp-util');
let sassGlob = require('gulp-sass-glob');
let uglify = require('gulp-uglify');

// del = require('del');
const config = require('./gulp.config');

gulp.task('js', () => {
    return gulp.src(config.js.src)
    .pipe(uglify())
    .on('error', error => console.log(error))
    .pipe(rename('staples-ds.min.js'))
    .pipe(gulp.dest(config.buildLocations.js))
})

gulp.task('sass', () => {
    return gulp.src(config.sass.src)
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'compressed' }))
        .on('error', error => console.log(error))
        .pipe(rename('staples-ds.min.css'))
        .pipe(gulp.dest(config.buildLocations.css));
})

function isProd() {
    return gulpUtil.env.type === 'production';
}