'use strict';

const koirat = [];
for(let i = 0; i < 6; i++) {
  const koira = prompt("Anna " + (i + 1) + " koiran nimi: ");
  koirat.push(koira)
}

koirat.sort().reverse();

let message = "<ul>";
for(let i = 0; i < koirat.length; i++) {
  message += "<li>" + koirat[i] + "</li>";
}
message += "</ul>";

document.querySelector("#vastaus").innerHTML = message;
