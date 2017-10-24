'use strict';

module.exports = function() {

  $.gulp.task('copy:css', function() {
    return $.gulp.src('src/css/app-2.css')
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })

};
