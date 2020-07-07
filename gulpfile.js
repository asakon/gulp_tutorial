const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', () => {
   return gulp.src('./src/sass/common.scss')
   .pipe(sass())
   .pipe(gulp.dest('./dist'))
})