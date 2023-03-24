'use strict';

const luku = parseInt(prompt("Number: "));
let message;
let alkulukuko = true;

if(luku <= 1) {
  message = "Ei ole alkuluku."
} else {
  for(let i = 2; i < luku; i++) {
    if(luku % i === 0) {
      alkulukuko = false;
    }
  }
}

if(alkulukuko) {
  message = "Luku " + luku + " on alkuluku";
} else {
  message = "Luku " + luku + " ei ole alkuluku";
}

console.log(message)

document.querySelector("#vastaus").innerHTML = message;
