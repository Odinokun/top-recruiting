module.exports = function() {

  // begin preloader
    $(window).on('load', function () {
        var $preloader = $('#preloader');
        var $loader = $('#loader');
        $loader.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });
  // end   preloader

};