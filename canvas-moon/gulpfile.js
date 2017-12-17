// commonJS 模块化方案
var gulp = require('gulp');
// 前段多任务自动化的脚本、build就是编译
gulp.task('build',function(){
    return gulp.src('./src/js/main.js')//找到某个文件
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('watch',['build'],function(){
    gulp.watch('./src/js/*.js',['build']);//监听所有文件 有修改就执行build命令
});
gulp.task('default',['watch']);