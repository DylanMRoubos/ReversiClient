const { src, dest } = require('gulp');
const concat = require("gulp-concat");
const order = require("gulp-order");
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');

const js = function (filesJs, filesJsOrder, serverPath) {
    return function () {
        return src(filesJs)
        .pipe(order(filesJsOrder, { base: './' }))
        .pipe(concat('app-raw.js'))
        .pipe(dest('./dist/js'))
        .pipe(dest(serverPath + '/js'))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))                
        .pipe(concat('app-uglify.js'))
        .pipe(uglify({compress: true}))  
        .pipe(dest('./dist/js'))
        .pipe(dest(serverPath + '/js'));
    }
};

exports.js = js;