/*
Aufgabe: 3 Name: Manuel Matern
Matrikel: 261185
Datum: 13.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */

namespace task3 {




    //Karten Interface
    interface Card {
        color: string;
        value: string;
    }

    //Karten
    let allCards: Card[] = [
        { color: "Kreuz", value: "7" }, { color: "Kreuz", value: "8" }, { color: "Kreuz", value: "9" }, { color: "Kreuz", value: "10" }, { color: "Kreuz", value: "Bube" }, { color: "Kreuz", value: "Dame" }, { color: "Kreuz", value: "Koenig" }, { color: "Kreuz", value: "Ass" },
        { color: "Herz", value: "7" }, { color: "Herz", value: "8" }, { color: "Herz", value: "9" }, { color: "Herz", value: "10" }, { color: "Herz", value: "Bube" }, { color: "Herz", value: "Dame" }, { color: "Herz", value: "Koenig" }, { color: "Herz", value: "Ass" },
        { color: "Pik", value: "7" }, { color: "Pik", value: "8" }, { color: "Pik", value: "9" }, { color: "Pik", value: "10" }, { color: "Pik", value: "Bube" }, { color: "Pik", value: "Dame" }, { color: "Pik", value: "Koenig" }, { color: "Pik", value: "Ass" },
        { color: "Karo", value: "7" }, { color: "Karo", value: "8" }, { color: "Karo", value: "9" }, { color: "Karo", value: "10" }, { color: "Karo", value: "Bube" }, { color: "Karo", value: "Dame" }, { color: "Karo", value: "Koenig" }, { color: "Karo", value: "Ass" },
    ]

    //Handkarten
    let handKarten: Card[] = [];
    let abgelegteKarten: Card[] = [];

    document.addEventListener("DOMContentLoaded", numberCheck);

    //Button
    window.onload = function () {
        document.getElementById('sortButton').addEventListener("click", cardsSort);
        setting();
        addClickEventForHand();
    }

    //Add Click/spacebar function to Aufnahmestapel
    function setting(): void {
        document.addEventListener("keydown", function (event) {
            if (event.which == 32 && allCards.length != 0) {
                //get 1 new Card
                takeCardFromDeck(handKarten.length);
                addClickEventForHand();
            }
        });
        document.getElementById('aufnahme').addEventListener("click", function () {
            if (allCards.length != 0) {
                takeCardFromDeck(handKarten.length);
                addClickEventForHand();
            }
        });
    }

    //Click Events für die Karten
    function addClickEventForHand(): void {
        for (let i = 0; i < handKarten.length; i++) {
            document.getElementById('i' + handKarten[i].value + handKarten[i].color).addEventListener("click", function () {
                showAblagestapel(handKarten[i].color, handKarten[i].value);
                abgelegteKarten.push(handKarten[i]);
                handKarten.splice(i, 1);
                deletingCards();
                for (let j: number = 0; j < handKarten.length; j++) {
                    intoHtml(handKarten[j].color, handKarten[j].value);
                }
                addClickEventForHand();
            });
        }
    }

    //Darstellung der Karten auf dem Ablagestapel
    function showAblagestapel(_cardColor: String, _cardValue: String): void {

        let node: HTMLElement = document.getElementById("ablage");
        node.innerHTML = "";

        let createDiv = document.createElement('div');
        let cardString = `<div class="ablageCard" id="i${_cardValue}${_cardColor}">${_cardColor + " " + _cardValue}</div>`
        document.getElementById("ablage").innerHTML += cardString;
    }

    //Karten sortieren
    function cardsSort(): void {

        for (let i: number = 0; i < handKarten.length; i++) {
            for (let j: number = i + 1; j < handKarten.length; j++) {
                if (handKarten[i].color.localeCompare(handKarten[j].color) == 1) {
                    let changeCard: Card;
                    changeCard = handKarten[i];
                    handKarten[i] = handKarten[j];
                    handKarten[j] = changeCard;
                }
            }
        }

        deletingCards();
        for (let i: number = 0; i < handKarten.length; i++) {
            intoHtml(handKarten[i].color, handKarten[i].value)
        }
        addClickEventForHand();
    }

    //Karten löschen
    function deletingCards() {
        let node: HTMLElement = document.getElementById("karten");
        node.innerHTML = "";
    }

    //Prompt
    function takeCardFromDeck(n: number): void {
        if (allCards.length != 0) {
            let x: number = Math.floor(Math.random() * allCards.length);
            handKarten.push(allCards[x]);
            allCards.splice(x, 1);
            intoHtml(handKarten[n].color, handKarten[n].value);
        }
    }

    //User Eingabe wird gecheckt
    function numberCheck(): void {
        let userInput: string = prompt("Wie viele Karten möchtest du?");
        let cardsOnTheHand: number = parseInt(userInput);
        if (Number.isNaN(cardsOnTheHand) || cardsOnTheHand < 0 || cardsOnTheHand > allCards.length) {
            numberCheck();
        }
        else {
            for (let i: number = 0; i < cardsOnTheHand; i++) {
                takeCardFromDeck(i);
            }
        }
    }

    //Html generation
    function intoHtml(_cardColor: String, _cardValue: String): void {

        let createDiv = document.createElement('div');
        let cardString = `<div class="handCards" id="i${_cardValue}${_cardColor}">${_cardColor + " " + _cardValue}</div>`
        document.getElementById("karten").innerHTML += cardString;

    }

}