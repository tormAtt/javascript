'use strict';
const nimi = prompt("Anna nimesi: ")
const arpa = Math.floor(Math.random() * 4) + 1;
console.log(arpa)
let luokka;
switch(arpa){
  case 1:
    luokka = "Gryffindor";
    break;
  case 2:
    luokka = "Slytherin";
    break;
  case 3:
    luokka = "Hufflepuff";
    break;
  case 4:
    luokka = "Ravenclaw";
    break;
}

document.querySelector("#vastaus").innerHTML = nimi + ", you are " + luokka + ".";
