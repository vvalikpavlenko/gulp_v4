module.exports = ()=>{
    $.gulp.task('img:build', ()=>{
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('JqLVrlxtpjJS77rrmKPVshWD9QR9tWNJ'))
            .pipe($.gulp.dest('build/static/img'));
    })
    $.gulp.task('img:dev', ()=>{
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img'))
            .pipe($.bs.reload({
                    stream: true,
                }));
    })
}
