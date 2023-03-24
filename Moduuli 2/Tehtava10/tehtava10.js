'use strict';

const kandidaatit = parseInt(prompt("Give the number of candidates: "));

const kandidaattiLista = [];

function vote(nimi){
  for(let i = 0; i < kandidaattiLista.length; i++){
    if(kandidaattiLista[i].nimi === nimi) {
      kandidaattiLista[i].votes++;
    }
  }
}

for(let i = 0; i < kandidaatit; i++) {
  const nimi = prompt("Name for candidate " + (i + 1) + ": ");
  let kandidaatti = {
    nimi: nimi,
    votes: 0,
  }
  kandidaattiLista.push(kandidaatti)
}

const aanestajat = parseInt(prompt("Give the number of voters: "));

for(let i = 0; i < aanestajat; i++) {
  const aani = prompt("Write the name of the candidate you are voting: ");
  if(aani !== ""){
    vote(aani);
  }
}

kandidaattiLista.sort((a, b) => {
   console.log(a.votes, b.votes);
   return b.votes - a.votes;
});

console.log("The winner is " + kandidaattiLista[0].nimi + " with " + kandidaattiLista[0].votes + " votes.\nResults:")
for(let i = 0; i < kandidaattiLista.length; i++) {
  console.log(kandidaattiLista[i].nimi + ": " + kandidaattiLista[i].votes + " votes")
}
