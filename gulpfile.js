const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexBugsFixes = require('postcss-flexbugs-fixes')
const cssWring = require('csswring')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const fs = require('fs')
const htmlmin = require('gulp-htmlmin')

const autoprefixerOption = {
    grid: true
}

const postcssOption = [
    flexBugsFixes,
    autoprefixer(autoprefixerOption),
    cssWring
]

const configJsonData = fs.readFileSync('./src/ejs/config.json')
const configObj = JSON.parse(configJsonData)

const ejsDataOption = {
    config: configObj
}

const htmlminOption = {
    collapseWhitespace: true
}

gulp.task('sass', () => {
   return gulp.src('./src/sass/common.scss')
   .pipe(sass())
   .pipe(postcss(postcssOption))
   .pipe(gulp.dest('./dist'))
})

gulp.task('ejs', () => {
    return gulp.src('./src/html/*.ejs')
    .pipe(ejs(ejsDataOption))
    .pipe(rename({ extname: '.html' }))
    .pipe(htmlmin(htmlminOption))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('./src/html/**/*.ejs', gulp.series('ejs'))
})
