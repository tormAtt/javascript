'use strict';

const button = document.getElementById("start");

function calculate(evt) {
  const choice = document.getElementById("operation").value;
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  let answer = 0;
  switch(choice) {
    case "add":
      answer = num1 + num2;
      document.querySelector("#result").innerHTML = answer.toString();
      break;
    case "sub":
      answer = num1 - num2;
      document.querySelector("#result").innerHTML = answer.toString();
      break;
    case "multi":
      answer = num1 * num2;
      document.querySelector("#result").innerHTML = answer.toString();
      break;
    case "div":
      answer = num1 / num2;
      document.querySelector("#result").innerHTML = answer.toString();
      break;
  }
}

button.addEventListener("click", calculate)

