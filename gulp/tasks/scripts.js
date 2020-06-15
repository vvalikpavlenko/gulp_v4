module.exports =()=>{
    $.gulp.task('scripts', ()=>{
        return $.gulp.src(['./node_modules/jquery/dist','./node_modules/slick-carousel/slick'])// библиотеки
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.bs.reload({
                stream: true,
            }));
    })
}