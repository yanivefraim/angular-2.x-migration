'use strict';

var gulp = require('gulp');
var conf = require('../../config').typescript.development;
var typescript  = require('gulp-typescript');
var sourcemaps  = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var cache = require('gulp-cached');
var browserSync = require('browser-sync');

var tsProject = typescript.createProject({
    target: 'es5',
    module: 'commonjs',
    sortOutput: true,
    typescript: require('typescript')
});

var karmaCoverageProject = typescript.createProject({
    target: 'es6',
    sortOutput: true,
    typescript: require('typescript')
});

gulp.task('typescript-dev', function () {
    return gulp.src(conf.scripts)
        .pipe(cache('typescript'))
        .pipe(sourcemaps.init())
        .pipe(tslint())
        .pipe(tslint.report('prose', { emitError: false }))
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write('./maps', {includeContent: false, sourceRoot: '/src'}))
        .pipe(gulp.dest(conf.dest))
        .pipe(browserSync.stream());
});

gulp.task('typescript-karma-coverage', function () {
    return gulp.src(conf.scripts)
        .pipe(tslint())
        .pipe(tslint.report('prose', { emitError: false }))
        .pipe(typescript(karmaCoverageProject))
        .pipe(gulp.dest(conf.coverage))
});


