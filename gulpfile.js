const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexBugsFixes = require('postcss-flexbugs-fixes')

const autoprefixerOption = {
    grid: true
}

const postcssOption = [
    flexBugsFixes,
    autoprefixer(autoprefixerOption)
]

gulp.task('sass', () => {
   return gulp.src('./src/sass/common.scss')
   .pipe(sass())
   .pipe(postcss(postcssOption))
   .pipe(gulp.dest('./dist'))
})