'use strict';

async function getJoke() {
  const haku = "https://api.chucknorris.io/jokes/random";

  try {
    const response = await fetch(haku);
    const json = await response.json();
    console.log(json.value);
  } catch(error) {
    console.log(error.message)
  }
}

getJoke();
