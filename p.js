var submitButton = $('form[action="https://www.redlights.be/login/"] button[type="submit"]');

submitButton.click(function(event) {
  event.preventDefault();
  event.stopPropagation();
    
  alert(123);
});
