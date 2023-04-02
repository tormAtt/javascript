'use strict';

const form = document.getElementById("form");
async function getJoke(evt) {
  evt.preventDefault();
  const haku = document.querySelector("input[name=q]").value;
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${haku}`);
    const json = await response.json();
    printJokes(json);
  } catch(error) {
    console.log(error.message)
  }
}

function printJokes(json) {
  document.body.innerHTML = "";
  document.body.appendChild(form);
  for(let i = 0; i < json.result.length; i++) {
    const article = document.createElement("article");
    const joke = document.createElement("p");
    joke.appendChild(document.createTextNode(json.result[i].value));

    article.appendChild(joke);
    document.body.appendChild(article);
  }
}

form.addEventListener("submit", getJoke);
