'use strict';

const luvut = [];
for(let i = 0; i < 5; i++) {
  const luku = prompt("Anna luku: ");
  luvut.push(luku)
}

for(let i = 5; i >= 0; i--) {
  console.log(luvut[i])
}
