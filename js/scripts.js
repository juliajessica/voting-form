$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age < 18) {
    $(".under-age").show();
  } else if (age === 18) {
    alert("Congratulations, you're officially legal to vote!");
    $(".of-age").show();
  } else {
    $(".of-age").show();
  }
});
