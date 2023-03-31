'use strict';

const lista = document.querySelector("#target");

const firstLi = document.createElement("li");
const firstText = document.createTextNode("First item");
firstLi.appendChild(firstText);
lista.appendChild(firstLi);

const secondLi = document.createElement("li");
const secondText = document.createTextNode("Second item");
secondLi.appendChild(secondText);
lista.appendChild(secondLi);

const thirdLi = document.createElement("li");
const thirdText = document.createTextNode("Third item");
thirdLi.appendChild(thirdText);
lista.appendChild(thirdLi);

lista.getElementsByTagName("li")[1].className = "my-item";
