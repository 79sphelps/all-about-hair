
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

    //-------- Active Sticky Js ----------//
    $(".default-header").sticky({topSpacing:0});


    if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    // $('.navbar-nav>li>a').on('click', function(){
    //     $('.navbar-collapse').collapse('hide');
    // });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-gallery').owlCarousel({
        items: 6,
        loop:true,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],
        responsive: {
            0: {
                items: 6
            },
            480: {
                items: 6,
            },
            768: {
                items: 6,
            },
            900: {
                items: 6,
            }

        }
    });


    // Select all links with hashes
    $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click',function(event) {
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
          scrollTop: target.offset().top-50
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


    // Smooth scroll from just the #bannerBtn
    var $root = $('html, body');
    $('#bannerBtn').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 1500, function () {
            //window.location.hash = href;
        });

        return false;
    });

    $('.pricingDetails').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 1500, function () {
            //window.location.hash = href;
        });

        return false;
    });


    $('.nav-item a').click(function(){
        if ('href' === '#home' || 'href' === '#service' || 'href' === '#gallery' || 'href' === '#team' || 'href' === '#price' || 'href' === '#contact') {
        var match = $(this).attr('href').match(/#\S+/);
        ga('send', 'pageview', location.pathname + match[0]);
        }
    });


    /*
    $(document).ready(function() {
        // Smooth scroll from just the #bannerBtn
        var $root = $('html, body');

        $('#bannerBtn').click(function() {

            console.log('...bannerBtn...');

            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 1500, function () {
                window.location.hash = href;
            });

            return false;
        });

        $('#mc_embed_signup').find('form').ajaxChimp();

        $('.nav-item a').click(function(){
            if ('href' === '#home' || 'href' === '#service' || 'href' === '#gallery' || 'href' === '#team' || 'href' === '#price' || 'href' === '#contact') {
            var match = $(this).attr('href').match(/#\S+/);
            ga('send', 'pageview', location.pathname + match[0]);
            }
          });
    });
    */

   $(function() {
    $(".intro").addClass("go");

    $(".reload").click(function() {
      $(".intro")
        .removeClass("go")
        .delay(200)
        .queue(function(next) {
          $(".intro").addClass("go");
          next();
        });
    });
  });

 });


/*
// Smooth scrolling from all anchor tags
var $root = $('html, body');
$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    return false;
});
*/