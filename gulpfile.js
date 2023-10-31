const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Задача для browser-sync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
    notify: false,
  });
  
  // Следим за изменениями в файлах HTML, CSS и JS
  gulp.watch(['*.html', '*.css', '*.js']).on('change', browserSync.reload);
});

// Задача по умолчанию
gulp.task('default', gulp.series('browser-sync'));
