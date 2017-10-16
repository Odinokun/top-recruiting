// BEGIN Меню для навигации при разработке

// закоментить перед prodaction
$(document).ready(function ($) {
  pageWidget([
    'index',
    'anketa',
    'article',
    'cases',
    'clients',
    'company',
    'resume',
    'review',
    'team',
    'vacancies',
    'vacancy'
    ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Меню для навигации при разработке


//====== Begin Programmer code ======
//begin open/close submenu in top menu
$('.header-menu .header-menu__item-parents span').on('click', function () {
  var submenu = $(this).siblings('.header-menu__sublist');

  $(this).toggleClass('active');
  $(submenu).slideToggle();
});
//end open/close submenu in top menu


//begin open/close top menu
$('#burger label').on('click', function () {
  $('#header-menu__list').toggleClass('active');
  //del header__right active classes
  $('.header__right-inn').removeClass('active');
});
//end open/close top menu


//begin open/close header right block
$('.header__right-button').on('click', function () {
  $('.header__right-inn').toggleClass('active');

  //del menu active classes
  $('#header-menu__list').removeClass('active');
  $('.header-menu .header-menu__item-parents span').removeClass('active');
  $('#burger input').prop('checked', false);
  $('.header-menu__sublist').slideUp();
});
//end open/close header right block


// BEGIN активная/неактивная кнопка в форме
$(window).on('load', function() {
  $("input:checkbox:checked").parent().addClass('checked');
});

$("input:checkbox").on('click', function() {
  if ($(this).is(':checked')) {
    $(this).parent().addClass('checked');
  } else {
    $(this).parent().removeClass('checked');
  }
});
// END активная/неактивная кнопка в форме


// begin popup open
$('.popup-open').on('click', function() {
  var popupName = $(this).data('open');

  $('#popup-' + popupName).fadeIn();
  $('.popup__layer').fadeIn();
  $('body').addClass('no-scroll');

  return false;
});
// end   popup open

// begin popup success
$('.popup__submit').on('click', function() {
  $('.popup').fadeOut();
  $('#popup-success, .popup__layer').fadeIn();
});
// end   popup success

// begin popup close
$('.popup__layer, .popup-close').on('click', function() {
  $('.popup, .popup__layer, .popup-success').fadeOut();
  $('body').removeClass('no-scroll');

  // закрываем попапы в шапке
  $('.geolocation-region__popup-city, .geolocation-region__popup').fadeOut();
  return false;
});
// end   popup close


// begin clients filer
$('.clients-filter__btn').on('click', function() {
  $('.clients-filter__btn').removeClass('active');
  $(this).addClass('active');

  var visible = $(this).data('filter');

  if (visible == 'all') {
    $('.clients-list__item').fadeIn(100);
  }
  else {
    $('.clients-list__item').fadeOut(100);
    // $('.clients-list__item--' + visible).fadeIn();
    $('.clients-list__item[data-filter="'+ visible +'"]').fadeIn(100);
  }
});
// end clients filer


//begin reviews сворачивание/разворачивание отзыва
$('.review-letters__footer-fadeout').on('click', function () {

  $(this).prevAll('.review-letters__text-bottom').slideDown();
  $(this).prevAll('.review-letters__footer-fadein').fadeIn();
  $(this).fadeOut();

  return false;

});
$('.review-letters__footer-fadein').on('click', function () {

  $(this).prevAll('.review-letters__text-bottom').slideUp();
  $(this).next('.review-letters__footer-fadeout').fadeIn();
  $(this).fadeOut();

  return false;

});
//end reviews сворачивание/разворачивание отзыва