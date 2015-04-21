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

  var mySwiper = new Swiper ('.js-carousel-main', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    mousewheelForceToAxis: true,
    onInit: function(swiper) {
    	setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },
    onSlideChangeStart: function(swiper) {
    	setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    }
  });
 });
