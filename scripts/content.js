/*const triggerWords = [
    "suicide",
    "dépresseion",
    "harcèlement",
    "viol",
    "fausse couche"
]*/

/*const replacementWords = [
    "papillon",
    "lapin",
    "chiot",
    "chaton",
    "poney",
    "licorne"
]*/

//const text2test = "AVERTISSEMENT: Le passage que vous allez lire contient un contenu choquant et peut déclencher une réaction anxieuse, surtout chez les personnes ayant des antécédents traumatiques. Les résultats des scientifiques semblaient indiquer qu'une telle précaution pourrait en réalité contribuer à générer de l'anxiété, ce qui la rendrait contre-productive. Sauf que cette étude avait une limite importante: elle n'impliquait aucune personne concernée par un traumatisme."

"use strict";

function switchNames() {
let selectedElements = Array.from( 
  document.querySelectorAll("h1,h2,h3,h4,h5,p,span,caption")
);

const filteredElements = selectedElements.filter((el) => {
  console.log(el.innerHTML);
  return el.innerHTML.includes(" la ")
})

filteredElements.forEach((el) => {
    console.log(el.innerHTML);
    el.innerHTML = el.innerHTML.replaceAll(
      " la ",
      `<span style="background-color: orangered"> BAR </span>`
    );
  });
}

switchNames()