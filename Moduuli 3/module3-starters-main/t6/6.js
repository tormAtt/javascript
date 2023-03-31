'use strict';

const button = document.querySelector("button");

function alertButton(){
  alert("Button clicked");
}

button.addEventListener("click", alertButton);
