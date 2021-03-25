const config = require('./config'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
   {series, parallel} = require("gulp");

const js = require('./tasks/js').js(config.files.js["1"], config.files.js, config.localServerProjectPath);
const sass = require('./tasks/sass').sass(config.localServerProjectPath, config.files.sass);
const html = require('./tasks/html').html(config.files.html);
const vendor = require('./tasks/vendor').vendor(config.files.vendor, config.localServerProjectPath);
const templates = require('./tasks/templates').templates(config.files.templates, config.files.partials, config.localServerProjectPath);

const watchFiles = () => {
    watch(['src/**/*.scss'], gulp.series(sass));
};

exports.js = js;
exports.watch = watchFiles;
exports.sass = sass;
exports.html = html;
exports.vendor = vendor;
exports.templates = templates;

exports.build = parallel(js, sass, html, vendor, templates);