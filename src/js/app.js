function checkMobileMenu() {
  let bodyWidth = $('body').width();

  if (bodyWidth <= 991) {
    $('.dropdown-toggle').each(function () {
      $( this ).attr('data-toggle', 'dropdown');
    });
  } else {
    $('.dropdown-toggle').each(function () {
      $( this ).attr('data-toggle', '');
    });

    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').show();
    }, function() {
      $(this).find('.dropdown-menu').hide();
    });
  }
}

$( window ).resize(function() {
  checkMobileMenu();
});

$( document ).ready(function() {
  checkMobileMenu();
});

var header = $('.header');
var backToTop = $('.js_back-top');

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    header.addClass('header--not-transparent');
    backToTop.addClass('back-to-top--active');
  } else {
    header.removeClass('header--not-transparent');
    backToTop.removeClass('back-to-top--active');
  }
});

backToTop.on('click', function(e){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  e.preventDefault();
})