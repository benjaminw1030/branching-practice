$(document).ready(function () {
  const height = parseInt(prompt("Please enter your height (in inches): "));

  if (height > 80) {
    $("#tooTall").show();
  } else if (height > 54 && height <= 80) {
    $("#thresher").show();
    $("#rapids").show();
    $("#dragon").show();
  } else if (height > 48 && height <= 54) {
    $("#rapids").show();
    $("dragon").show();
  } else if (height <= 48 && height >= 30) {
    $("#kiddie").show();
  } else {
    $("#tooShort").show();
  }
})