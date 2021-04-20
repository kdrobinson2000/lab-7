 
function myFunction() {
  alert(input.value);
  output.innerHTML = input.value;
  
  
}

var button = document.getElementById ('entrybutton');
var input=document.getElementById ('entryinput');
var output=document.getElementById ('textoutput');

button.addEventListener ('click', myFunction);