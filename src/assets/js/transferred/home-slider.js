
(function($) {
  "use strict";

  var carousel = function() {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true
        },
        600: {
          items: 1,
          nav: false,
          dots: true
        },
        1000: {
          items: 1,
          nav: true
        }
      }
    });


    $(".carousel").owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });


      /*
      '<span><i class="fas fa-arrow-alt-circle-left"></i></span>',
      '<span><i class="fas fa-arrow-alt-circle-right"></i></span>'

      <ion-icon name="ionic" color="primary"></ion-icon>
      */

    $(".carousel1").owlCarousel({
      loop: false,
      items: 1,
      margin: 30,
      stagePadding: 10,
      nav: true,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    $(".carousel-engine").owlCarousel({
      loop: false,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
  };
  carousel();

})(jQuery);