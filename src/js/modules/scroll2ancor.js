module.exports = function() {

  // begin scroll 2 ancor - mouse
  $(function() {
    $('a.mouse-top[href*=\\#]').on("click", function(e){
       e.preventDefault();
       var anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
       }, 1000);
    });
    return false;
  });
  // end scroll 2 ancor - mouse

};