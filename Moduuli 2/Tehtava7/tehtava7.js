'use strict';

function diceRoll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("Anna nopan sivujen määrä: "));

let message = "<ul>";
while(true) {
  const luku = diceRoll(sides)
  message += "<li>" + luku + "</li>";
  if(luku == sides) {
    break;
  }
}
message += "</ul>";

document.querySelector("#vastaus").innerHTML = message;
