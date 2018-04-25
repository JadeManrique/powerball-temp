(document).ready( function() {

  $(".submit").click(function() {

  });

});

function limiter(input) {
   if (input.value < 0) input.value = 0;
   if (input.value > 10000000) input.value = 10000000;
}
