const gulp = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const cleancss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const gulpResolveUrl = require('gulp-resolve-url');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');

gulp.task('html', () => {
	return gulp.src('src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('public'))
		.pipe(browserSync.stream());
});

gulp.task('scss', () => {
	return gulp.src('src/scss/master.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		// .pipe(gulpResolveUrl())
		.pipe(cleancss({ compatibility: 'ie8' }))
		.pipe(rename('master.min.css'))
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream());
});

gulp.task('js', () => {
	return gulp.src('src/js/app.js')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(webpack({
			mode: 'production',
		}))
		.pipe(babel({
			presets: ['@babel/env'],
		}))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/js'))
		.pipe(browserSync.stream());
});

gulp.task('assets', () => {
	return gulp.src('src/assets/**/*')
		.pipe(gulp.dest('public/assets'))
		.pipe(browserSync.stream());
});

gulp.task('build', ['html', 'scss', 'js', 'assets']);

gulp.task('watch', ['build'], () => {
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/scss/**/*.scss', ['scss']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/assets', ['assets']);
});

gulp.task('default', ['watch'], () => {
	browserSync.init({
		server: {
			baseDir: './public',
		},
	});
});