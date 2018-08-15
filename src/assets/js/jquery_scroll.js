/*
let anchorlinks = document.querySelectorAll('a[href^="#"]')
    
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
*/

$(document).ready(function($) {

  $("nav div ul li a").on("click", function(evt) {
    evt.preventDefault();
    var offset = $(this.hash).offset();
    if (offset) {
      $("html, body").animate({
        scrollTop: offset.top
      });
    }
  });

  if ($.browser.msie && $.browser.version <= 7) {
    $("#unsupported-browser-alert").show();
  }

  // Pagination
  // Show first page by default
  $("#page-1").show();

  $("#services-events-pagination")
    .bootpag({
      total: 5
    })
    .on("page", function(event, num) {
      $("#services-events-content div").hide();
      var current_page = "#page-" + num;
      $(current_page).show();
    });

  $("#services-prints-table").DataTable({
    order: [[3, "desc"]]
  });

  // Fixes a problem with the pagination div content dissappearing after navigating to an admin page.
  $("#myhomepage").click(function(num = "1") {
    $("#services-events-pagination")
      .bootpag({
        total: 5
      })
      .on("page", function(event, num) {
        $("#services-events-content div").hide();
        var current_page = "#page-" + num;
        $(current_page).show();
      });
  });

});
