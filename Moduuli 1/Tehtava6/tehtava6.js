'use strict';

const vastaus = confirm('Should i calculate the square root?');

let message;
if (vastaus) {
  const luku = prompt("Number: ");
  if(luku < 0) {
    message = "The square root of a negative number is not defined.";
  } else {
    message = Math.sqrt(luku);
  }
} else {
  message = "The square root is not calculated.";
}

document.querySelector("#vastaus").innerHTML = message;
