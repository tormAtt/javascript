'use strict';

const osallistujat = prompt("Syötä osallistujien määrä: ");
const lista = [];

for(let i = 0; i < osallistujat; i++){
  const nimi = prompt("Anna osallistujan nimi: ");
  lista.push(nimi);
}

lista.sort();

let message = "<ol>";
for(let i = 0; i < lista.length; i++) {
  message += "<li>" + lista[i] + "</li>";
}
message += "</ol>";

document.querySelector("#vastaus").innerHTML = message;
