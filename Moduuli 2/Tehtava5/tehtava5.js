'use strict';

const luvut = [];

while(true) {
  const luku = prompt("Anna luku: ");
  if(luvut.includes(luku)){
    alert("Luku jo annettu.");
    break;
  } else {
    luvut.push(luku);
  }
}

luvut.sort((a, b) => a - b)

for(let i = 0; i < luvut.length; i++) {
  console.log(luvut[i])
}
