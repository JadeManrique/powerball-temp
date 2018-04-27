$(document).ready( function() {

  $(".submit").click(function() {
    var entry = {
      winnings: $("#currentNum").val(),
      name: $("#name").val(),
      cash: $("#money").val()
    }
    console.log(entry);
  });

  function playGame(data) {
   $.post('https://lottery-vs-reality-eagarcia.c9users.io/playGame', data);
 }

});

function limiter(input) {
   if (input.value < 0) input.value = 0;
   if (input.value > 10000000) input.value = 10000000;
}
