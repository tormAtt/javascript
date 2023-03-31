'use strict';

const trigger = document.querySelector("#trigger");
const image = document.querySelector("#target");

function swapPic1(evt){
  document.querySelector("#target").src = "img/picB.jpg";
}

function swapPic2(evt){
  document.querySelector("#target").src = "img/picA.jpg";
}

trigger.addEventListener("mouseenter", swapPic1);
trigger.addEventListener("mouseleave", swapPic2);
