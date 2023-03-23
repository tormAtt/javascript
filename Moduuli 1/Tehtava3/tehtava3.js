'use strict';
const luku1 = parseInt(prompt("Anna ensimmäinen luku: "));
const luku2 = parseInt(prompt("Anna toinen luku: "));
const luku3 = parseInt(prompt("Anna kolmas luku: "));

const summa = luku1 + luku2 + luku3;
const tulo = luku1 * luku2 * luku3;
const avg = summa / 3;
document.querySelector("#summa").innerHTML = "Summa: " + summa;
document.querySelector("#tulo").innerHTML = "Tulo: " + tulo;
document.querySelector("#avg").innerHTML = "Keskiarvo: " + avg;
