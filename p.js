$(document).ready(function() {
  var submitButton = $('form button[type="submit"]');
  $(submitButton).click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    alert(123);
  });
});
