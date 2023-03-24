'use strict';


const luvut = [];
while(true) {
  const luku = prompt("Syötä luku. Syötä pelkkä enter lopettaaksesi: ");
  if(luku === "") {
    break;
  } else {
    luvut.push(luku);
  }
}
function even(numbers) {
  const even = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){
      even.push(numbers[i])
    }
  }
  return even;
}

const evenList = even(luvut);
console.log("Alkuperäinen: " + luvut + "\nKahdella jaolliset: " + evenList);



