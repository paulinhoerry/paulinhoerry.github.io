var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
// var inject      = require('gulp-inject');
    

gulp.task('serve', ['sass'], function(){
    
    browserSync.init({
        server: '.'
    });
    
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
    
});

// gulp.task('injection', function () {
//   var target = gulp.src('./index.html');
//   // It's not necessary to read the files (will speed up things), we're only after their paths:
//   var sources = gulp.src(['node_modules/**/*.js', 'node_modules/**/*.css'], {read: false});

//   return target.pipe(inject(sources))
//     .pipe(gulp.dest('./'));
// });

gulp.task('sass', function(){
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve'] );
