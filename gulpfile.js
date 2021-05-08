"use strict"
global.$ = {
    gulp : require('gulp'),
    bs : require('browser-sync').create(),
    sassGlob : require('gulp-sass-glob'),
    sass: require('gulp-sass'),
    fileinclude: require('gulp-file-include'),
    gp : require('gulp-load-plugins')(),
    path: {
        tasks:require("./gulp/config/tasks.js")
    }
}
$.path.tasks.forEach((taskPath)=>{
    require(taskPath)()
})

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug',"sass",'scripts:lib','scripts', "img:dev",'font','video',"svg"),
    $.gulp.parallel('watch',"serve"),
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug',"sass",'scripts:lib','scripts', "img:build",'font','video','svg'),
    $.gulp.parallel('watch',"serve"),
));

