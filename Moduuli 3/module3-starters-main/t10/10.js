'use strict';

const form = document.querySelector("form");
const etuNimi = document.querySelector("input[name=firstname]");
const sukuNimi = document.querySelector("input[name=lastname]");

function tulostus(evt) {
  evt.preventDefault();
  document.querySelector("#target").innerHTML = "Your name is " + etuNimi.value + " " + sukuNimi.value;
}

form.addEventListener("submit", tulostus)
