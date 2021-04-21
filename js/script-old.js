function init() {
  alert(input.value);
  output.innerHTML = input.value;
}

var button = document.getElementById ('entrybutton');
var input=document.getElementById ('entryinput');
var output=document.getElementById ('textoutput');


button.addEventListener ('click', init);

window.addEventListener('load', init);
