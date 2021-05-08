module.exports = ()=>{
    $.gulp.task('pug', ()=>{
        return $.gulp.src('src/html/*.html')
            // .pipe($.gp.html({
            //     pretty: true// не минимизировать
            // }))
            .pipe($.fileinclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe($.gulp.dest('build'))
            .on('end', $.bs.reload);
    })
}