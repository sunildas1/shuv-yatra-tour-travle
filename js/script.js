//---------side-bar-menu----------//

$(".menu-bar").click(function(){
   $(".sidebar").toggleClass("test")
})

$(".close").click(function(){
   $(".sidebar").removeClass("test")
})

//---------packges-slider-menu----------//

$('.packges-slider').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      }
    }
  ]
});


(function($) { "use strict";
		
	$(document).ready(function(){"use strict";
	
		//---------Scroll back to top----------//
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	});
	
})(jQuery);

//---------fixed menu----------//

$(window).scroll(function(){
	console.log($(window).scrollTop())
  
	if($(window).scrollTop() > 200){
	  $(".menu").addClass("fixd")
	}else{
	  $(".menu").removeClass("fixd")
	}
  
	if($(window).scrollTop() > 200){
	  $(".f").addClass("logo-w")
	}else{
	  $(".f").removeClass("logo-w")
	}
	
	if($(window).scrollTop() > 200){
	  $(".w").addClass("fixd-2")
	}else{
	  $(".w").removeClass("fixd-2")
	}
  
	if($(window).scrollTop() > 600){
	  $(".topper").fadeIn()
	}else{
	  $(".topper").fadeOut()
	}
  })

//---------smoothscroll----------//

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//---------sidebar-part----------//

  let menuItems = {
    'Home': '#banner-part',
    'About': '#about-part',
    'Services': '#service-part',
    'Packges': '#packges-part',
    'Team': '#team-part',
    'Contact': '#contact',
}

  $('#sidebar').Sidebar({
    openTriggerId: 'openSidebar',
    items: menuItems,
    width: 250,
    closeButtonColor: '#fff',
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})



$('.detail-slider').slick({
  arrows: false,
  dots: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      }
    }
  ]
});