const { src, dest, parallel, watch } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');


function css(cb) {
	return src('src/styles/scss/staples-ds.scss')
		.pipe(sassGlob())
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer())
		.on('error', error => console.log(error))
		.pipe(rename('staples-ds.min.css'))
		.pipe(dest('dist/css/'));
	cb();
}

function js(cb) {
	return src('node_modules/bootstrap/dist/js/bootstrap.js')
		.pipe(uglify())
		.on('error', error => console.log(error))
		.pipe(rename('staples-ds.min.js'))
		.pipe(dest('dist/js/'))
	cb();
}

exports.default = function() {
	watch('src/**/*.scss', { ignoreInitial: false }, parallel(css, js));
}