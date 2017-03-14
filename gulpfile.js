'use strict';

const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const gutil = require('gulp-util');
const historyApiFallback = require('connect-history-api-fallback');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require("webpack");

/*****************************************************************************
 * Configuration
 *****************************************************************************/

const config = {
    output: 'build/',

    assets: {
        source: 'assets/**',
        output: 'build/assets',
    },

    sass: {
        source: 'source/sass/app.scss',
        watch: 'source/**/*.scss',
        output: 'build/',
    },

    index: 'source/index.html',
};

gulp.task('build:index', () => {
    return gulp.src(config.index).pipe(gulp.dest(config.output));
});

gulp.task('watch:index', ['build:index'], () => {
    gulp.watch(config.index, ['build:index']);
});

gulp.task('build:assets', () => {
    return gulp.src(config.assets.source).pipe(gulp.dest(config.assets.output));
});

gulp.task('build:sass', () => {
    return gulp.src(config.sass.source)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.sass.output));
});

gulp.task('watch:sass', ['build:sass'], () => {
    gulp.watch(config.sass.watch, ['build:sass']);
});

let webpackCompiler = webpack(require('./webpack.config'));
webpackCompiler.plugin('compile', () => {
    gutil.log(gutil.colors.bold.cyan('Compiling bundles...'));
});

gulp.task('build:js', callback => {
    webpackCompiler.run((err, stats) => {
        gutil.log(gutil.colors.bold.cyan('Compiled bundles.') + '\n' + stats.toString({ chunks: false, colors: true }));
        callback();
    });
});

let watchJsCallbackCalled = false;

gulp.task('watch:js', callback => {
    webpackCompiler.watch({ aggregateTimeout: 500 }, (err, stats) => {
        gutil.log(gutil.colors.bold.cyan('Compiled bundles.') + '\n' + stats.toString({ chunks: false, colors: true }));
        global.gc();

        if (!watchJsCallbackCalled) {
            watchJsCallbackCalled = true;
            callback();
        }
    });
});

gulp.task('build', ['build:js', 'build:sass', 'build:assets', 'build:index']);
gulp.task('watch', ['watch:js', 'watch:sass', 'watch:index']);

gulp.task('serve', ['watch'], () => {
    browserSync.init({
        notify: false,
        port: 8080,
        open: true,
        server: {
            baseDir: config.output,
            routes: {
                '/assets': 'assets'
            },    
            middleware: [historyApiFallback({ index: '/index.html' })]
        },
        ui: {
            port: 8081
        },
        ghostMode: false,
        watchOptions: {
            ignoreInitial: true,
            ignored: '*.map',
        },
        files: [config.output],
    });
});

gulp.task('default', ['serve']);
