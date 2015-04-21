// jshint devel:true
$(function() {
  //initialize swiper when document ready
  
  function setBodyClass(theme) {
  	if (theme) {
    	$('body').addClass('theme-' + theme);
    } else {
    	$('body').removeClass('theme-white');
    }
  }

  var mainSlider = new Swiper('.js-carousel-main', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    onInit: function(swiper) {
    	setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },
    onSlideChangeStart: function(swiper) {
    	setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    }
  });

  var teamSlider = new Swiper('.js-carousel-team', {
    pagination: '.team-pagination',
    paginationClickable: true,
    bulletClass: 'team-pagination-item',
    bulletActiveClass: 'team-pagination-item-active',
    direction: 'vertical',
    mousewheelControl: true,
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
