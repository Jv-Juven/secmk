var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var staticPath = "dist/static/"

gulp.task('default', [
	'minifyCss',
	'uglifyJs'
]);
// 压缩css代码
gulp.task('minifyCss', function() {
	gulp.src(staticPath + 'css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest(staticPath + 'css'));
});
// 压缩js代码
gulp.task('uglifyJs', function() {
	gulp.src(staticPath + 'js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(staticPath + 'js'));
});
