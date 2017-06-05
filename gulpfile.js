"use strict";

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	nano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	size = require('gulp-size'),
	del = require('del'),
	maps = require('gulp-sourcemaps');

gulp.task('concatScripts', function(){
	return gulp.src(["assets/jquery/jquery.min.js",
		"assets/bootstrap/js/bootstrap.min.js",
		"assets/smooth-scroll/SmoothScroll.js",
		"assets/jarallax/jarallax.js",
		"assets/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js",
		"assets/masonry/masonry.pkgd.min.js",
		"assets/imagesloaded/imagesloaded.pkgd.min.js",
		"assets/social-likes/social-likes.js",
		"assets/mobirise/js/script.js",
		"assets/mobirise-gallery/script.js",
		"assets/scripts/main.js"])
	.pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ['concatScripts'], function(){
	return gulp.src("js/app.js")
	.pipe(size({title:'js/app.js'}))
	.pipe(uglify())
	.pipe(rename("app.min.js"))
	.pipe(gulp.dest('js'))
	.pipe(size({title:'js/app.min.js'}));
});

gulp.task("concatCSS", function(){
	return gulp.src(["https://fonts.googleapis.com/css?family=Roboto:700,400&amp;subset=cyrillic,latin,greek,vietnamese",
		"assets/bootstrap/css/bootstrap.min.css",
		"assets/animate.css/animate.min.css",
		"assets/socicon/css/socicon.min.css",
		"assets/mobirise/css/style.css",
		"assets/mobirise-slider/style.css",
		"assets/mobirise-gallery/style.css",
		"assets/mobirise/css/mbr-additional.css",
		"assets/style/main.css"])
	.pipe(maps.init())
    .pipe(concat('styles.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest("css"));
});

gulp.task("minifyCSS", ['concatCSS'], function(){
	return gulp.src("css/styles.css")
	.pipe(size({title:'css/styles.css'}))
	.pipe(nano())
	.pipe(rename("styles.min.css"))
	.pipe(gulp.dest('css'))
	.pipe(size({title:'css/styles.min.css'}));
});