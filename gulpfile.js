var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");

gulp.task('default', ['sass', 'browser-sync', 'watch']);

//sassとpugの監視をして変換処理させる
gulp.task('watch', () => {
    gulp.watch(['./css/**'], () => {
        gulp.start(['sass']);
    });
    gulp.watch(['./pug/**'], () => {
        gulp.start(['pug']);
    });
});

//ブラウザ表示
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./"   //サーバとなるrootディレクトリ
        }
    });
    //ファイルの監視
    //以下のファイルが変わったらリロードする
    gulp.watch("./public/javascripts/**/*.js",     ['reload']);
    gulp.watch("./*.html",         ['reload']);
});

//sassをcssに変換
gulp.task("sass", () => {
    gulp.src("./public/stylesheets/**/*scss")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets/"))
        //reloadせずにinjectする
        .pipe(browserSync.stream())
});

//ブラウザリロード処理
gulp.task('reload', () => {
    browserSync.reload();
});
