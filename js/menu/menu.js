var menuButton = '.nav__menuButton';
var slideMenu = '.slideOutMenu';



$(document).ready( function() {
  $(menuButton).on('click', function() {
      $(slideMenu).slideDown();
  });

  $('#closeButton').on('click', function() {
  	$(slideMenu).slideUp();
  });

  $('.slideOutMenu__listMenu a').on('click', function() {
  	$(slideMenu).slideUp();
  });

}); //end of doc ready



