'use strict';

const numberOfDice = parseInt(prompt("Give the number of dice: "));
const sum = parseInt(prompt("Give the sum: "));

let success = 0;
for(let i = 0; i < 10000; i++) {
  let helperSum = 0;
  for(let x = 0; x < numberOfDice; x++) {
    const dice = Math.floor(Math.random() * 6) + 1;
    helperSum += dice;
  }
  if(helperSum === sum) {
    success++;
  }
}

let tulos = success / (10000 / 100);
Number.parseFloat(tulos).toFixed(2);

document.querySelector("#vastaus").innerHTML = numberOfDice + " dice, sum " + sum + ", propability is  about " + tulos + "%.";
