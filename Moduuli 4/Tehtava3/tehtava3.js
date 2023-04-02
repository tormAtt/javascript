'use strict';

const form = document.getElementById("form");
form.addEventListener("submit", getInfo);
async function getInfo(evt) {
  evt.preventDefault();
  const haku = document.querySelector("input[name=q]").value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${haku}`);
    const json = await response.json();
    console.log(json);
    getResults(json)
  } catch (error) {
    console.log(error.message);
  }
}
const div = document.getElementById("results");
function getResults(json) {
  div.innerHTML = "";
  for(let i = 0; i < json.length; i++) {
    const name = json[i].show.name;
    const url = json[i].show.url;
    const image = json[i].show.image?.medium;
    const summary = json[i].show.summary;

    const header = document.createElement("h2");
    const nameT = document.createTextNode(name);
    header.appendChild(nameT);

    const link = document.createElement("a");
    link.target = "_blank";
    link.href = url;
    link.innerHTML = url;

    const img = document.createElement("img");
    img.src = image;
    img.alt = name;

    const summaryDiv = document.createElement("div");
    summaryDiv.innerHTML = summary;

    const article = document.createElement("article");
    article.appendChild(header);
    article.appendChild(link);
    article.appendChild(img);
    article.appendChild(summaryDiv);

    div.appendChild(article);
  }
}
