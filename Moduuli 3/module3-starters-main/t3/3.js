'use strict';
const names = ['John', 'Paul', 'Jones'];

let nameList = "";

for(let i = 0; i < names.length; i++){
  nameList += `<li>${names[i]}</li>`
}

document.querySelector("#target").innerHTML = nameList;
