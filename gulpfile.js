"use strict";

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	nano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	size = require('gulp-size'),
	del = require('del');

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
    .pipe(concat('app.js'))
    .pipe(gulp.dest("js"));
});