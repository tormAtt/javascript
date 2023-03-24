'use strict';

const luku = prompt("Give the number of dice rolls: ");
let summa = 0;

for(let i = 0; i < luku; i++) {
  const dice = Math.floor(Math.random() * 6) + 1;
  //console.log("dice: " + dice)
  summa += dice;
}

document.querySelector("#vastaus").innerHTML = summa;
