const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('task1', () => {
    return gulp.src('t01_interpolation/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./t01_interpolation/'));
});

gulp.task('task2', () => {
    return gulp.src('t02_nested/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./t02_nested/'));
});

gulp.task('task3', () => {
    return gulp.src('t03_mixin/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./t03_mixin/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('generate-task-1', gulp.series(['clean', 'task1']));
gulp.task('generate-task-2', gulp.series(['clean', 'task2']));
gulp.task('generate-task-3', gulp.series(['clean', 'task3']));

/*
To generate "css" from "scss" write in the terminal "gulp generate-task-1" for first task and the similar command
for the other tasks.
 */