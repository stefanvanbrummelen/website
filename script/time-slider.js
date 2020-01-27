/* Leestijd slider */

var slider = document.getElementById("time-slider");
var output = document.getElementById("leestijd");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}