$(document).ready(function () {
  const animal = prompt("What animal would you like to look at?").toLowerCase();

  if (animal === "lion" || animal === "lions" ) {
    $('#lion').show();
  } else if (animal === "tiger" || animal === "tigers") {
    $('#tiger').show();
  } else if (animal === "bear" || animal === "bears") {
    $('#bear').show();
  } else {
    $('#other').show();
  }

  $("#lionClick").click(function() {
    $("#lion").show();
    $("#bear").hide();
    $("#tiger").hide();
    $("#other").hide();
  });

  $("#bearClick").click(function() {
    $("#bear").show();
    $("#tiger").hide();
    $("#lion").hide();
    $("#other").hide();
  });
  
  $("#tigerClick").click(function() {
    $("#tiger").show();
    $("#lion").hide();
    $("#bear").hide();
    $("#other").hide();
  });
});
 