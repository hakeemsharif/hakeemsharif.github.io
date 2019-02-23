$(window).scroll(function() {
  if ($(this).scrollTop()> 300) {

      $('#Profile').addClass('animated fadeInLeft');
      $('#About--me').addClass('animated fadeInLeft');
   } else {
   }
});
