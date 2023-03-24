'use strict';

const luvut = [];
while(true) {
  const luku = parseInt(prompt("Anna luku: "));
  if(luku === 0) {
    break;
  } else {
    luvut.push(luku)
  }
}

luvut.sort((a, b) => a - b).reverse()
console.log(luvut)

for(let i = 0; i < luvut.length; i++) {
  console.log(luvut[i])
}
