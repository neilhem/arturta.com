!function(a,b,c,d){function e(b,c){this.element=b,h=h=a.extend({},g,c),this._defaults=g,this._name=f,l.push(b);var d=a(b).isOnScreen();a(b).data("onScreen",d),d&&h.onWindowEnter(a(b))}var f="windows",g={snapping:!0,snapSpeed:500,snapInterval:1100,onScroll:function(){},onSnapComplete:function(){},onWindowEnter:function(){}},h={},i=a(b),j=0,k=null,l=[];a.fn.ratioVisible=function(){var a=i.scrollTop();if(!this.isOnScreen())return 0;var b=this.offset(),c=b.top-a,d=i.height(),e=(c+d)/d;return e>1&&(e=1-(e-1)),e},a.fn.isOnScreen=function(){var a=i.scrollTop(),b=i.height(),c=this.offset(),d=c.top-a;return d>=b||-b>=d?!1:!0};var m=a.fn.getCurrentWindow=function(){var b=0,c=l[0];return a.each(l,function(d){var e=a(this).ratioVisible();Math.abs(e)>Math.abs(b)&&(c=a(this),b=e)}),a(c)},n=function(){j=i.scrollTop(),p(),h.onScroll(j),a.each(l,function(b){var c=a(this),d=c.isOnScreen();d&&(c.data("onScreen")||h.onWindowEnter(c)),c.data("onScreen",d)})},o=function(){p()},p=function(){k&&clearTimeout(k),h.snapping&&(k=setTimeout(function(){var b=m(),c=b.offset().top,d=!1;a("html:not(:animated),body:not(:animated)").animate({scrollTop:c},h.snapSpeed,function(){d||(k&&clearTimeout(k),k=null,d=!0,h.onSnapComplete(b))})},h.snapInterval))};a.fn[f]=function(b){return i.scroll(n),i.resize(o),this.each(function(c){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})}}(jQuery,window,document),$(function(){"use strict";function a(a){$("body").removeClass().addClass("theme-"+a)}var b=(new Swiper(".js-carousel-test",{speed:800,pagination:".swiper-pagination",paginationClickable:!0,direction:"vertical",mousewheelControl:!0,nextButton:".caption-nav-link.next",prevButton:".caption-nav-link.prev",onInit:function(b){a(b.slides[b.activeIndex].dataset.theme)},onSlideChangeStart:function(b){a(b.slides[b.activeIndex].dataset.theme)}}),new Swiper(".swiper-container-h",{pagination:".swiper-pagination-h",paginationClickable:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:30}),new Swiper(".js-carousel-main",{speed:800,pagination:".swiper-pagination",paginationClickable:!0,direction:"vertical",mousewheelControl:!0,nextButton:".caption-nav-link.next",prevButton:".caption-nav-link.prev",onInit:function(b){a(b.slides[b.activeIndex].dataset.theme)},onSlideChangeStart:function(b){a(b.slides[b.activeIndex].dataset.theme)}}),new Swiper(".js-carousel-client",{speed:800,pagination:".client-pagination",paginationClickable:!0,bulletClass:"client-pagination-item",bulletActiveClass:"client-pagination-item-active",direction:"vertical",mousewheelControl:!0,nextButton:".caption-nav-link.next",prevButton:".caption-nav-link.prev",onInit:function(b){a(b.slides[b.activeIndex].dataset.theme)},onSlideChangeStart:function(b){a(b.slides[b.activeIndex].dataset.theme)},paginationBulletRender:function(a,b){var c=$(".js-carousel-client .swiper-slide").eq(a).data();return'<li class="'+b+'"><a class="link" href="#"><span>'+c.name+"</span></a></li>"}}),new Swiper(".js-carousel-team",{speed:800,grabCursor:!0,pagination:".team-pagination",paginationClickable:!0,bulletClass:"team-pagination-item",bulletActiveClass:"team-pagination-item-active",direction:"vertical",mousewheelControl:!0,nextButton:".caption-nav-link.next",prevButton:".caption-nav-link.prev",scrollbar:".swiper-scrollbar",scrollbarHide:!0,parallax:!0,onInit:function(b){a(b.slides[b.activeIndex].dataset.theme)},onSlideChangeStart:function(b){a(b.slides[b.activeIndex].dataset.theme)},paginationBulletRender:function(a,b){var c=$(".js-carousel-team .swiper-slide").eq(a).data();return'<li class="'+b+'"><span>'+c.name+"</span> "+c.position+"</li>"}}),$(".section"));b.windows({snapping:!0,snapSpeed:500,snapInterval:1100,onScroll:function(a){},onSnapComplete:function(b){a(b.data("theme"))},onWindowEnter:function(b){console.log(b.data("theme")),a(b.data("theme"))}})});