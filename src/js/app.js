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


$(window).on('load', function(){
  $('.js_carousel-heading').show();
  $('.js_carousel-heading').insertBefore( $( ".slick-dots" ) );
})

$( document ).ready(function() {
  checkMobileMenu();

  // Slick init
  $('.js_home-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    customPaging: function(slider, i) {
      return $(slider.$slides[i]).find(".js_carousel-content").html();
    },
  });
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
});

