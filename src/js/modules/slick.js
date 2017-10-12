module.exports = function() {

  // begin top slider left
  $('.top-slider__left .top-slider__list').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed:3200,
    cssEase: 'linear'
  });
  // end   top slider left

  // begin top slider right
  $('.top-slider__right .top-slider__list').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed:3500,
    cssEase: 'linear'
  });
  // end   top slider right

};