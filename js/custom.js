$(window).load(function() { // makes sure the whole site is loaded
  "use strict";

  // menu
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 40;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar-default').addClass('on');
    } else {
      $('.navbar-default').removeClass('on');
    }
  });

  $('body').scrollspy({
    target: '.navbar-default',
    offset: 70
  });
});

$(document).ready(function(){
  "use strict";

  // scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-top').click(function () {
    $('#back-top a').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-top').tooltip('hide');

  // initialize smoothscroll
  smoothScroll.init();
});
