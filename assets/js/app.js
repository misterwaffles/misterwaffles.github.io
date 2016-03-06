( function( $ ) {
lastScrollTop = 0;

$(window).scroll(function() {
  var st = $(document).scrollTop();
  if (st > 50) {
    if (st > lastScrollTop) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  }

  lastScrollTop = st;
});
$( document ).ready(function() {
$(document).ready(function(){

$('#story').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#story").offset().top
}, 425);
});

$('#accordion-menu > ul > li > a').click(function() {
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#accordion-menu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;
  }
});

});

});
} )( jQuery );
