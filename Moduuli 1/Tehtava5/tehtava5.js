'use strict';
const vuosi = prompt("Anna vuosi: ")

let message;

if(vuosi % 100 === 0) {
  if(vuosi % 400 === 0){
    message = "Karkausvuosi.";
  } else {
    message = "Ei ole karkausvuosi.";
  }
} else {
  if(vuosi % 4 === 0){
    message = "Karkausvuosi.";
  } else {
    message = "Ei ole karkausvuosi.";
  }
}

document.querySelector("#vastaus").innerHTML = message;
