/*
Aufgabe: 2 Name: Manuel Matern
Matrikel: 261185
Datum: 06.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */
//Karten
let allCards = [
    { color: "Kreuz", value: "7" }, { color: "Kreuz", value: "8" }, { color: "Kreuz", value: "9" }, { color: "Kreuz", value: "10" }, { color: "Kreuz", value: "Bube" }, { color: "Kreuz", value: "Dame" }, { color: "Kreuz", value: "Koenig" }, { color: "Kreuz", value: "Ass" },
    { color: "Herz", value: "7" }, { color: "Herz", value: "8" }, { color: "Herz", value: "9" }, { color: "Herz", value: "10" }, { color: "Herz", value: "Bube" }, { color: "Herz", value: "Dame" }, { color: "Herz", value: "Koenig" }, { color: "Herz", value: "Ass" },
    { color: "Pik", value: "7" }, { color: "Pik", value: "8" }, { color: "Pik", value: "9" }, { color: "Pik", value: "10" }, { color: "Pik", value: "Bube" }, { color: "Pik", value: "Dame" }, { color: "Pik", value: "Koenig" }, { color: "Pik", value: "Ass" },
    { color: "Karo", value: "7" }, { color: "Karo", value: "8" }, { color: "Karo", value: "9" }, { color: "Karo", value: "10" }, { color: "Karo", value: "Bube" }, { color: "Karo", value: "Dame" }, { color: "Karo", value: "Koenig" }, { color: "Karo", value: "Ass" },
];
//Handkarten
let handKarten = [];
//Prompt
function abfrage() {
    let x = Math.floor(Math.random() * allCards.length);
    console.log(x);
    handKarten.push(allCards[x]);
    console.log(handKarten);
    allCards.splice(x, 1);
}
document.addEventListener("DOMContentLoaded", numberCheck);
function numberCheck() {
    let frage = prompt("Wie viele Karten möchtest du?");
    let cardsOnTheHand = parseInt(frage);
    if (Number.isNaN(cardsOnTheHand) || cardsOnTheHand < 0 || cardsOnTheHand > allCards.length) {
        numberCheck();
    }
    else {
        for (let i = 0; i < cardsOnTheHand; i++) {
            abfrage();
            intoHtml(handKarten[i], i);
        }
    }
}
function intoHtml(singleCard, i) {
    let createDiv = document.createElement('div');
    let cardString = `<div id="handCards" class="i${i}">${singleCard.color + " " + singleCard.value}</div>`;
    document.body.appendChild(createDiv);
    document.getElementById("hand").innerHTML += cardString;
}
//document.getElementById("ablage").innerHTML
//document.getElementById("aufnahme").innerHTML
//document.getElementById("hand").innerHTMLappendChild(prodElement) 
/*let s: CSSStyleDeclaration = createDiv.style;
s.border = "thin solid black";
s.position = "absolute";
s.backgroundColor = "#8A4B08";
s.width = 130 + "px";
s.height = 200 + "px";
s.left = (1 + 5) * 5 + "px";
s.top = 15 + "px";
s.borderRadius = 10 + "px"; */ 
//# sourceMappingURL=main.js.map