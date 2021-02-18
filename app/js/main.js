$ (function (){

  var headerHeight = $('header').outerHeight(),
    headerTop = 0;

  function toggleHeader(e) {
    var scroll_status = $(document).scrollTop();
    if (scroll_status > e)
      $(".header__top").addClass("header__top--fix");
    else
      $(".header__top").removeClass("header__top--fix");
  };

  $(document).scroll(function () {
    if ($(window).width() < 992) {
      toggleHeader(headerTop);
    } else {
      toggleHeader(headerHeight);
    }
  });

  

  $(window).resize(function () {
    if ($(window).width() > 550) {
      $('.big-item').addClass('product__item-big');
  } else {
    $('.big-item').removeClass('product__item-big');
  }
  }).resize();



  $('.header__content-inner').slick({
    dots: true,
    arrows: false,
    asNavFor: '.header__images',
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.header__images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.header__content-inner'
  });
});