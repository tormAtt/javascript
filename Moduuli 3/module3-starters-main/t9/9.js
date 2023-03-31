'use strict';

const button = document.getElementById("start");

function calculate(evt) {
  const calc = document.getElementById("calculation").value;
  let answer = 0;
  let num1 = 0;
  let num2 = 0;
  let numbers;

  if(calc.includes("+")) {
    numbers = calc.split("+");
    num1 = parseFloat(numbers[0]);
    num2 = parseFloat(numbers[1]);
    answer = num1 + num2;
    document.querySelector("#result").innerHTML = answer.toString();
  } else if(calc.includes("-")) {
    numbers = calc.split("-");
    num1 = parseFloat(numbers[0]);
    num2 = parseFloat(numbers[1]);
    answer = num1 - num2;
    document.querySelector("#result").innerHTML = answer.toString();
  } else if(calc.includes("*")) {
    numbers = calc.split("*");
    num1 = parseFloat(numbers[0]);
    num2 = parseFloat(numbers[1]);
    answer = num1 * num2;
    document.querySelector("#result").innerHTML = answer.toString();
  } else if(calc.includes("/")) {
    numbers = calc.split("/");
    num1 = parseFloat(numbers[0]);
    num2 = parseFloat(numbers[1]);
    answer = num1 / num2;
    document.querySelector("#result").innerHTML = answer.toString();
  } else {
    document.querySelector("#result").innerHTML = "Ei löytynyt +, -, * tai /";
  }
}

button.addEventListener("click", calculate);
