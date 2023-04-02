'use strict';

const form = document.getElementById("form");
form.addEventListener("submit", getInfo);
async function getInfo(evt) {
  evt.preventDefault();
  const haku = document.querySelector("input[name=q]").value;
  console.log(haku)
  try {
    const response = await fetch(form.action +=`?q=:${haku}`);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}
