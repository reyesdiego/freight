var gulp = require("gulp");
var ts = require("gulp-typescript");
var merge = require("merge2");
//var sass = require('gulp-sass');

// pull in the project TypeScript config
const tsProject = ts.createProject("tsconfig.json");

gulp.task("scripts", function () {
    var tsResult = gulp.src("src/**/*")
        .pipe(tsProject()); 
    /*      ts({
          declarationFiles: true,
          noExternalResolve: true,
          noImplicitAny: true,
          strict: true,
          out: 'main.js'
        })*/
    return merge([
        tsResult.dts.pipe(gulp.dest("release/definitions")),
        tsResult.js.pipe(gulp.dest("release/js"))
    ]);
});
/*
gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 */
gulp.task("watch", function () {
    // gulp.watch('*.scss', ['sass']);
    gulp.watch("*.ts", ["src"]);
});
