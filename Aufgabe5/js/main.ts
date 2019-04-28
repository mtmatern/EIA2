/*
Aufgabe: 5 Name: Manuel Matern
Matrikel: 261185
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */

namespace task5 {

    //Eventlistener ( alle ganz oben :) )
    document.addEventListener("DOMContentLoaded", initialize);
    document.addEventListener("DOMContentLoaded", buttonEvent);


    //Aufruf showHomoArr, Kollektion der fieldsets, Eventlistener change und preisBerechnen Verweis
    function initialize(_event: Event): void {
        showHomoArr(product)
        let fieldsets: HTMLCollectionOf< HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", preisBerechnen);
        }
    }


    //Variable zur späteren Verwendung
    let n: number = 0;

    //Funktion für den Button. Verweis von pruefungDerDaten Funktion
    function buttonEvent(): void {
    let button: HTMLButtonElement = < HTMLButtonElement>document.getElementById("checkButton");
    button.addEventListener("click", pruefungDerDaten)
    /* document.getElementById("checkButton").addEventListener("click", pruefungDerDaten); */
    /* console.log(showPrice + "wurde ausgeführt") */
    /*  let fieldsets: HTMLCollectionOf< HTMLFieldSetElement> = document.getElementsByTagName("fieldset"); */
    }
    
    //Anzeigen von HomogenousArray und Erstellung von hr und p Elementen zur Abgrenzung

    function showHomoArr(_homoVar: HomogenousArray): void {
        
        for (let array in _homoVar){
            let safe: HeteroPredefined[] = _homoVar[array];
            let hr:HTMLDivElement=document.createElement("hr");
            let p:HTMLElement= document.createElement("p");
            p.innerHTML = `<p id="wahlüberschriften">${array}</p>`
            document.getElementById("container").appendChild(hr);
            document.getElementById("container").appendChild(p);
            for (let i:number = 0; i< safe.length; i++){
                erstelleInputs(safe[i]);
            }
        }
    }

    //Erstellen der Inputs
    
    function erstelleInputs(_y:HeteroPredefined): void{
        let inputs: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        label.setAttribute("for", _y.id);
        label.innerText = _y.class;
        
        inputs.setAttribute("type", _y.type);
        inputs.setAttribute("name", _y.name);
        inputs.setAttribute("alt", _y.price.toString());
        inputs.setAttribute("price", _y.price.toString());
        inputs.setAttribute("value", _y.value.toString());
        inputs.setAttribute("id", _y.id);
        inputs.setAttribute("class", _y.class);
        inputs.setAttribute("min", _y.minimum.toString());
        inputs.setAttribute("max", _y.maximum.toString());
        document.getElementById("container").appendChild(label);
        label.appendChild(inputs);
    }

    


    //Preisberechnung und Erstellung von p Tag im Checkout
    function preisBerechnen(_event: Event): void {
        n = 0;
        document.getElementById("Order").innerHTML = '';
        let input: HTMLCollectionOf< HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis: number = Number(input[i].alt);
                n += preis;
                let OrderName: HTMLLIElement = document.createElement("li");
                OrderName.innerHTML = `<p>${input[i].className}</p>`
                document.getElementById("Order").appendChild(OrderName);

            }
            if (input[i].type == "number") {
                let stepperNumber: number = Number(input[i].value);
                console.log(stepperNumber);
                let preis: number = Number(input[i].alt);
                n += preis * stepperNumber
                
                if (stepperNumber > 0) {
                    let OrderName: HTMLLIElement = document.createElement("li");
                    OrderName.innerHTML = `<p>${stepperNumber} ${input[i].className}</p>`
                    document.getElementById("Order").appendChild(OrderName);
                }
            }
           /*  if (input[i].id == "" && input[i].checked == true) {
                let preis: number = Number(input[i].value);
                n += preis;
                let OrderName: HTMLLIElement = document.createElement("li");
                OrderName.innerHTML = `<p>${input[i].className}</p>`
                document.getElementById("Order").appendChild(OrderName);

            } */
        }

        document.getElementById("showprice").innerHTML = n.toFixed(2).toString();
    }

    function pruefungDerDaten(_event: Event): void {
        let leereFormulare: string[] = [];
        let pruefung: HTMLCollectionOf< HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < pruefung.length; i++) {
            if (pruefung[i].value == "") {
                let feldName: string = pruefung[i].name;
                leereFormulare.push(feldName);
            }
            if (pruefung[i].checked == false) {
                let feldClass: string = pruefung[i].className;
                leereFormulare.push(feldClass);
            }
        }
        if (leereFormulare.length == 0) {
            alert("Ihre Bestellung wurde erfolgreich abgesendet! Vielen Dank:)");
        }
        else { alert(`${leereFormulare} fehlt noch`); }
    }
   


}