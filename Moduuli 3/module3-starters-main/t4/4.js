'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const lista = document.querySelector("#target");

for(let i = 0; i < students.length; i++){
  const option = document.createElement("option");
  const nimi = document.createTextNode(students[i].name);
  option.appendChild(nimi);
  lista.appendChild(option);
  lista.getElementsByTagName("option")[i].value = students[i].id;
}
