+(function($) {
  "use strict";

  var Carousel = $.fn.carousel.Constructor;

  Carousel.prototype.zoom = function() {
    var $this = $(this);
    var $src = $this.attr("data-src");
    var $title = $this.attr("data-alt");
    var $bio = $this.attr("data-bio");
    var $role = $this.attr("data-role");
    /*
    var $title = $this
      .next(".carousel-caption")
      .text()
      .trim();
    */
 
    var $modal = $this.attr("data-modal-picture");
    var $modalElement = $.find($modal);
    
    $($modalElement)
      .find(".modal-body")
      .find("img")
      .attr("src", $src);
    
    $($modalElement)
      .find(".modal-title")
      .text($title);

    $($modalElement)
      .find(".modal-bio")
      .text($bio);

    $($modalElement)
      .find(".modal-role")
      .text($role);

    //$($modal).modal("show");
    $($modal)
      .appendTo("body")
      .modal("show");
  };

  $(document).on(
    "click.bs.carousel.data-api",
    "[data-modal-picture]",
    Carousel.prototype.zoom
  );

})(jQuery);

/*
jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();
*/