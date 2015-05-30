// jshint devel:true
$(function() {

  'use strict';

  function setBodyClass(theme) {
    if (theme) {
      $('body').addClass('theme-' + theme);
    } else {
      $('body').removeClass('theme-white');
    }
  }

  $('.js-snap').panelSnap({
    panelSelector: '> section',
    slideSpeed: 500,
    onSnapStart: function() {
      $('.l-header').removeClass('in');
      $('.l-footer').removeClass('in');
    },

    onSnapFinish: function() {
      $('.l-header').addClass('in');
      $('.l-footer').addClass('in');
    },

    onActivate: function(e) {
      setBodyClass($('.js-snap > .section').eq(0).data('theme'));
    }
  });

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
    pagination: '.team-pagination',
    paginationClickable: true,
    bulletClass: 'team-pagination-item',
    bulletActiveClass: 'team-pagination-item-active',
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
      var data = $('.js-carousel-team .swiper-slide').eq(index).data();
      return '<li class="' + className + '"><span>' + data.name + '</span> ' + data.position + '</li>';
    }
  });
});
