/* DOMcelementer */

//const { createEventDispatcher } = require("svelte")



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/
// din kode her

const redFigure = document.getElementById('redFigure')

console.log(redFigure)

const yellowFigure = document.getElementById('yellowFigure')

console.log(yellowFigure)

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/
// din kode her
redFigure.style.backgroundColor = 'blue'
yellowFigure.style.backgroundColor = 'blue'


/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/
// din kode her

const opgaveTwo = document.getElementById('opgaveTwo');
const newHeading = document.createElement('h2'); 
const newParagraph = document.createElement('p')

newHeading.textContent = "Opgave 2.1 løsning"; 
opgaveTwo.appendChild(newHeading); 

newParagraph.textContent = 'Jeg har løst opgave 2.1'
opgaveTwo.appendChild(newParagraph)


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/
// din kode her
const purpleFigures = document.getElementsByClassName('purpleFigures')
for (let i = 0; i < purpleFigures.length; i++) {
    console.log(purpleFigures[i]);
}


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
// din kode her
//const purpleFigures = document.getElementsByClassName('purpleFigures')
Array.from(purpleFigures).forEach(element => element.style.backgroundColor = "red");



/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/
// din kode her
Array.from(purpleFigures).forEach(element => {
    element.children[0].innerHTML = "RED"; // Change the text of the first child inside purpleFigures
});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};
// din kode her
const opgaveFour = document.getElementById('opgaveFour')

const myDataName = document.createElement('h4')
myDataName.textContent = myData.name
opgaveFour.appendChild(myDataName)

const myDataImage = document.createElement('img')
myDataImage.src = myData.image
myDataImage.alt = myData.name
opgaveFour.appendChild(myDataImage)

const myDatadescription = document.createElement('p')
myDatadescription.textContent = myData.description
opgaveFour.appendChild(myDatadescription)