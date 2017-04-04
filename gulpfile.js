const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');

gulp.task('compile', () => {
  gulp.src('lib/*')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('server', ['compile'], () => {
  nodemon({
    script: 'dist/main.js',
    watch: 'lib',
    tasks: ['compile']
  });
});

gulp.task('default', ['server']);
