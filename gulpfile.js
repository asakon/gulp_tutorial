const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexBugsFixes = require('postcss-flexbugs-fixes')
const cssWring = require('csswring')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')

const autoprefixerOption = {
    grid: true
}

const postcssOption = [
    flexBugsFixes,
    autoprefixer(autoprefixerOption),
    cssWring
]

gulp.task('sass', () => {
   return gulp.src('./src/sass/common.scss')
   .pipe(sass())
   .pipe(postcss(postcssOption))
   .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
    return gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
})

gulp.task('ejs', () => {
    return gulp.src('./src/html/*.ejs')
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'))
})