const { src, dest } = require('gulp'),
gulpSass = require('gulp-sass'),
concat = require('gulp-concat'),
cleanCSS = require('gulp-clean-css'),
rename = require("gulp-rename"),
autoprefixer = require('gulp-autoprefixer');

const sass = function (serverProjectPath, files_sass) {
    return function () {
        return src(files_sass)            
            .pipe(gulpSass().on('error', gulpSass.logError))
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(concat('style.min.css'))
            .pipe(dest('./dist/css'))
            .pipe(dest(serverProjectPath + '/css'));
    }
};

exports.sass = sass;