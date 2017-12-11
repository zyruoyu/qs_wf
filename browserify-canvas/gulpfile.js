var gulp = require('gulp');
// 将代码前后端模块化 统一的构建工具
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');//gulp 任务管理器 进住 在跟具体任务之间有一个插件 试配
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
    return browserify({
        entries: './src/js/main.js',
        debug: true
    })
    .transform('babelify',{
        presets:["env"]
    })
    .bundle()
    // 可以被gulp理解的源码格式
    // browserify->gulp 转码的过程
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())//压缩
    .pipe(gulp.dest('./dist/js'))
})
gulp.task('watch',['build'],function(){
    gulp.watch('./src/js/*.js',['build']);
});

gulp.task('default',['watch']);