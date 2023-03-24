'use strict';

const strings = [];

while(true) {
  const mJono = prompt("Syötä merkkijono. Syötä pelkkä enter lopettaaksesi: ");
  if(mJono === "") {
    break;
  } else {
    strings.push(mJono);
  }
}
function concat(strings) {
  let conStr = "";
  for(let i = 0; i < strings.length; i++) {
    conStr += strings[i];
  }
  return conStr;
}

document.querySelector("#vastaus").innerHTML = concat(strings);


