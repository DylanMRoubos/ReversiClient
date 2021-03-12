const config = require('./config'),
    gulp = require('gulp'),
    watch = require('gulp-watch');

const js = require('./tasks/js').js(config.files.js["0"], config.files.js, config.localServerProjectPath);
const sass = require('./tasks/sass').sass(config.localServerProjectPath, config.files.sass);
const html = require('./tasks/html').html(config.files.html);
const vendor = require('./tasks/vendor').vendor(config.files.vendor);
const templates = require('./tasks/templates').templates(config.files.templates);

const watchFiles = () => {
    watch(['src/**/*.scss'], gulp.series(sass));
};

exports.js = js;
exports.watch = watchFiles;
exports.sass = sass;
exports.html = html;
exports.vendor = vendor;
exports.templates = templates;