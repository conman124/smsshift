var gulp = require('gulp');
var clean = require('gulp-clean');
var jsonTransform = require('gulp-json-transform');
var babel = require('gulp-babel');

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
  gulp.src('js/**/*.js').pipe(gulp.dest('build/js'))
);

gulp.task('jsx', () =>
  gulp.src('js/jsx/**/*.jsx').pipe(babel()).pipe(gulp.dest('build/js/jsx'))
);

const configWhitelist = ["senderID"];
gulp.task('config', () =>
  gulp.src('../config.json').pipe(jsonTransform( (data) => {
    let config = {};
    for(let i = 0; i < configWhitelist.length; i++ ) {
      config[configWhitelist[i]] = data[configWhitelist[i]];
    }
    return config;
  })).pipe(gulp.dest('build'))
);

gulp.task('vendorjs', () => {
  gulp.src('node_modules/underscore/underscore-min.js').pipe(gulp.dest('build/js'));
});

gulp.task('default', ['html', 'css', 'manifest', 'js', 'jsx', 'config', 'vendorjs']);

gulp.task('clean', () =>
  gulp.src('build', {read: false}).pipe(clean())
)
