'use strict';

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

let message = "<ul>";
while(true) {
  const luku = diceRoll()
  message += "<li>" + luku + "</li>";
  if(luku == 6) {
    break;
  }
}
message += "</ul>";

document.querySelector("#vastaus").innerHTML = message;
