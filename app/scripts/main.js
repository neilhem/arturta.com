// jshint devel:true
$(function() {
  'use strict';

  function setBodyClass(theme) {
    $('body').removeClass().addClass('theme-' + theme);
  }

  var testSlider = new Swiper('.js-carousel-test', {
    speed: 800,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    }
  });

  var timelineCarousel = new Swiper('.gallery--timeline', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });

  var testSliderH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    paginationClickable: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30
  });

  var mainSlider = new Swiper('.js-carousel-main', {
    speed: 800,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    }
  });

  var clientSlider = new Swiper('.js-carousel-client', {
    speed: 800,
    pagination: '.client-pagination',
    paginationClickable: true,
    bulletClass: 'client-pagination-item',
    bulletActiveClass: 'client-pagination-item-active',
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    paginationBulletRender: function(index, className) {
      var data = $('.js-carousel-client .swiper-slide').eq(index).data();
      return '<li class="' + className + '"><a class="link" href="#"><span>' + data.name + '</span></a></li>';
    }
  });

  var teamSlider = new Swiper('.js-carousel-team', {
    speed: 800,
    grabCursor: true,
    pagination: '.team-pagination',
    paginationClickable: true,
    bulletClass: 'team-pagination-item',
    bulletActiveClass: 'team-pagination-item-active',
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    parallax: true,
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    paginationBulletRender: function(index, className) {
      var data = $('.js-carousel-team .swiper-slide').eq(index).data();
      return '<li class="' + className + '"><span>' + data.name + '</span> ' + data.position + '</li>';
    }
  });

  var $windows = $('.section');
  $windows.windows({
    snapping: true,
    snapSpeed: 500,
    snapInterval: 1100,
    onScroll: function(s) {},

    onSnapComplete: function($el) {
      setBodyClass($el.data('theme'));
    },

    onWindowEnter: function($el) {
      console.log($el.data('theme'));
      setBodyClass($el.data('theme'));
    }
  });

});
