"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require('gulp-sourcemaps');
const plumber = require("gulp-plumber");
const gcmq = require('gulp-group-css-media-queries');
const wait = require('gulp-wait'),
	notify = require("gulp-notify");
const browserSync = require("browser-sync");
let siteUrl = 'http://wp-fictional-univesity.host1670806.hostland.pro/';
let isDev = true;
let webpackConfig = {
	output: {
		filename: "webpack.js"
	},
	watch: false,
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							debug: true,
							corejs: 3,
							useBuiltIns: "usage"
						}]
					]
				}
			}
		}]
	},
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'eval-source-map' : 'none',
};

gulp.task('webpack', function () {
	return gulp.src('assets/js/src/main.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('assets/js/dist/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task("scss", function () {
	return gulp.src('assets/scss/my.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(wait(500))
		.pipe(sass({
			outputStyle: 'expanded',
			allowEmpty: true
		}).on('error', notify.onError(function (error) {
			return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
		})))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('assets/css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task("watch", function () {
	gulp.watch('assets/scss/**/*.scss', gulp.series('scss'));
	gulp.watch('assets/js/src/**/*.js', gulp.series('webpack'));
});

gulp.task('browser-sync', function () {
	browserSync.init({
		proxy: {
			target: siteUrl,
			ws: true
		},
		reloadDelay: 2000
	});
	gulp.watch("**/*.html").on('change', browserSync.reload);
	gulp.watch("**/*.php").on('change', browserSync.reload);
	gulp.watch("**/*.css").on('change', browserSync.reload);
	gulp.watch("**/*.js").on('change', browserSync.reload);
});
gulp.task('default', gulp.series('webpack', gulp.parallel('watch', 'browser-sync')));