var gulp        = require('gulp')
   ,browserSync = require('browser-sync')
   ,reload      = browserSync.reload
   ,imageResize = require('gulp-image-resize')


var index   = 'index.html'
   ,app     = 'app/**/*'
   ,css     = 'app/css/*'
   ,appjs   = 'app.js'
   ,imgs    = 'app/imgs/*'


gulp.task('index', function () {
  gulp.src(index)
    .pipe(reload({ stream:true }))
})

gulp.task('app', function () {
  gulp.src(app)
    .pipe(reload({ stream: true }))
})

gulp.task('appjs', function () {
  gulp.src(appjs)
    .pipe(reload({ stream: true }))
})

gulp.task('css', function () {
  gulp.src(css)
    .pipe(reload({ stream: true }))
})

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: 'localhost:8080'
  })
})

gulp.task('resize', function () {
  gulp.src(imgs)
    .pipe(imageResize({
      width : 350,
      // height : 300,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('app/imgs'));
});

gulp.task('watch', function () {
  gulp.watch(index, ['index'])
  gulp.watch(app, ['app'])
  gulp.watch(css, ['css'])
  gulp.watch(appjs, ['appjs'])
})

gulp.task('default', ['watch','browser-sync', 'resize'])
