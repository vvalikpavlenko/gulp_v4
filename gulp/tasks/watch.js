module.exports =()=>{
    $.gulp.task('watch',()=>{
        $.gulp.watch('src/html/*.html',$.gulp.series('pug'))
        $.gulp.watch('src/static/sass/**/*.scss',$.gulp.series('sass'))
        $.gulp.watch('src/static/js/**/*.js',$.gulp.series('scripts'))
        $.gulp.watch('src/static/img/**/*',$.gulp.series('img:dev'))
        $.gulp.watch('src/static/video/**/*',$.gulp.series('video'))
        $.gulp.watch('src/static/svg/**/*.svg',$.gulp.series('svg'))
    });
}