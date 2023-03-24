'use strict';

const alkuV = prompt("Anna alkuvuosi: ")
const loppuV = prompt("Anna loppuvuosi: ")

let message = "<ul>";
for(let vuosi = alkuV; vuosi <= loppuV; vuosi++) {
  if (vuosi % 100 === 0) {
    if (vuosi % 400 === 0) {
      message += "<li>" + vuosi + "</li>";
    }
  } else {
    if (vuosi % 4 === 0) {
        message += "<li>" + vuosi + "</li>";
      }
  }
}
message += "</ul>";

document.querySelector("#vastaus").innerHTML = message;
