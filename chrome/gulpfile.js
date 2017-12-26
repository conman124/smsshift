var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('html', () =>
  gulp.src('html/**/*').pipe(gulp.dest('build/html'))
);

gulp.task('css', () =>
  gulp.src('css/**/*').pipe(gulp.dest('build/css'))
);

gulp.task('manifest', () =>
  gulp.src(["manifest.json","background.html"]).pipe(gulp.dest('build'))
);

gulp.task('js', () =>
  gulp.src('js/**/*').pipe(gulp.dest('build/js'))
);

gulp.task('vendorjs', () => {
  gulp.src('node_modules/underscore/underscore-min.js').pipe(gulp.dest('build/js'));
});

gulp.task('default', ['html', 'css', 'manifest', 'js', 'vendorjs']);

gulp.task('clean', () =>
  gulp.src('build', {read: false}).pipe(clean())
)
