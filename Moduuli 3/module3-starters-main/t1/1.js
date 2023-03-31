'use strict';

const code = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>`;

document.querySelector("#target").innerHTML = code;
document.querySelector("#target").className = "my-list";
