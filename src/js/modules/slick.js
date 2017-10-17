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

  // begin cases slider
  $('.cases-slider__prev').on('click', function () {
    $('.cases-slider__list').slick('slickPrev');
  });
  $('.cases-slider__next').on('click', function () {
    $('.cases-slider__list').slick('slickNext');
  });
  $('.cases-slider__list').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed:3500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end cases slider


  // begin slider in service-sec
  // отображаем общее кол-во слайдов
  $('.service-sec__list ').on('init', function(event, slick){
    var allSlide = slick.slideCount;
    $( "#service-sec__counter-all" ).html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('.service-sec__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var curSlide = currentSlide + 1;
    $( "#service-sec__counter-tab" ).html(curSlide);
  });
  // инициализируем слайдер
  $('.service-sec__list').slick({
    arrows: false,
    speed: 100,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    nextArrow: '<a class="btn btn-bw" href="">Еще</a>',
    dots: true,
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
      i = i + 1;
      return  (i);
    }
  });
  // end slider in service-sec


  // begin slider in advantage section
  // показываем скрытые слайды при первой прокрутке карусели
  $('.our-clients-sec__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-cloned').css('visibility', 'visible')
  });
  // инициализируем карусель
  $('.our-clients-sec__list').slick({
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end   slider in advantage section


  // begin slider in advantage section
  // инициализируем карусель
  $('.worker-slider__list').slick({
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end   slider in advantage section

};