"use strict";

const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const header = require("gulp-header");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const publicLocation = './public/';

const pkg = require('./package.json');

// Set the banner content
const banner = ['/*!\n',
    ' * Callum D E Smith - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2018-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' */\n',
    '\n'
].join('');

function clean() {
    return del([publicLocation + 'vendor', publicLocation + 'css' ]);
}

function modules() {
    var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*').pipe(gulp.dest(publicLocation + 'vendor/bootstrap'));
    var fontAwesomeCSS = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/**/*').pipe(gulp.dest(publicLocation + 'vendor/fontawesome-free/css'));
    var fontAwesomeWebfonts = gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*').pipe(gulp.dest(publicLocation + 'vendor/fontawesome-free/webfonts'));
    var jqueryEasing = gulp.src('./node_modules/jquery.easing/*.js').pipe(gulp.dest(publicLocation + 'vendor/jquery-easing'));
    var jquery = gulp.src(['./node_modules/jquery/dist/*', '!./node_modules/jquery/dist/core.js']).pipe(gulp.dest(publicLocation + 'vendor/jquery'));
    var simpleLineIconsFonts = gulp.src('./node_modules/simple-line-icons/fonts/**').pipe(gulp.dest(publicLocation + 'vendor/simple-line-icons/fonts'));
    var simpleLineIconsCSS = gulp.src('./node_modules/simple-line-icons/css/**').pipe(gulp.dest(publicLocation + 'vendor/simple-line-icons/css'));
    return merge(bootstrap, fontAwesomeCSS, fontAwesomeWebfonts, jqueryEasing, jquery, simpleLineIconsFonts, simpleLineIconsCSS);
}

function css() {
    return gulp
        .src("./resources/sass/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest(publicLocation + "css"))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(publicLocation + "css"));
}

function js() {
    return gulp
        .src([
            './resources/js/*.js',
            '!./resources/js/*.min.js'
        ])
        .pipe(uglify())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(publicLocation + 'js'));
}

function images() {
    return gulp.src('./resources/img/*').pipe(gulp.dest(publicLocation + 'img'));
}

const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor, gulp.parallel(css, js, images));

// Export tasks
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.default = build;
