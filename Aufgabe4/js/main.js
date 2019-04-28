/*
Aufgabe: 4 Name: Manuel Matern
Matrikel: 261185
Datum: 21.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */
var task4;
(function (task4) {
    //Eventlistener
    document.addEventListener("DOMContentLoaded", showPrice);
    function showPrice(_event) {
        document.getElementById("checkButton").addEventListener("click", pruefungDerDaten);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", preisBerechnen);
        }
    }
    //Preisberechnung und Erstellung von p Tag im Checkout
    function preisBerechnen(_event) {
        let n = 0;
        document.getElementById("Order").innerHTML = '';
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis = Number(input[i].value);
                n += preis;
                let OrderName = document.createElement("li");
                OrderName.innerHTML = `<p>${input[i].className}</p>`;
                document.getElementById("Order").appendChild(OrderName);
            }
            if (input[i].name == "Stepper") {
                let stepperNumber = Number(input[i].value);
                console.log(stepperNumber);
                /* let preisStepper: number = Number(input[i].id); */
                n += stepperNumber; /* * preisStepper; */
                console.log("N ist jetzt:" + n);
                if (stepperNumber > 0) {
                    let OrderName = document.createElement("li");
                    OrderName.innerHTML = `<p>${stepperNumber} ${input[i].className}</p>`;
                    document.getElementById("Order").appendChild(OrderName);
                }
            }
        }
        document.getElementById("showprice").innerHTML = n.toFixed(2).toString();
    }
    /* function sortenLimit(): void {
        let input: HTMLCollectionOf< HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < input.length; i++)
            if (input[i].value < steppeer)

    } */
    function pruefungDerDaten() {
        let leereFormulare = [];
        let pruefung = document.getElementsByTagName("input");
        for (let i = 0; i < pruefung.length; i++) {
            if (pruefung[i].value == "") {
                let feldName = pruefung[i].name;
                leereFormulare.push(feldName);
            }
            if (pruefung[i].checked == false) {
                let feldClass = pruefung[i].className;
                leereFormulare.push(feldClass);
            }
        }
        if (leereFormulare.length == 0) {
            alert("Ihre Bestellung wurde erfolgreich abgesendet! Vielen Dank:)");
        }
        else {
            alert(`${leereFormulare} fehlt noch`);
        }
    }
    /* //Variablen für die Auswahl und Preis

    let waffelPreis: number = 0;
    let becherPreis: number = 0;
    let kugelPreis: number = 0;
    let eisSortePreis: number = 0;
    let extraPreis: number = 0;

    //Write HTML und Fieldset

    function writeHtml(): void {
        let node: HTMLElement = document.getElementById("container");
        let childNodeHTML: string;
        
        childNodeHTML += "</select>";
        childNodeHTML = "<h3>Wähle</h3>";
        childNodeHTML += "<select name='Select' id='becherwaffelCheck'>";
        for (let i: number = 0; i < becherwaffel.length; i++) {
            childNodeHTML += "<option value='" + i + becherwaffel[i].name + "'>" + becherwaffel[i].name + "</option>";
        }
        node.innerHTML += childNodeHTML;
    }
 */
})(task4 || (task4 = {}));
//# sourceMappingURL=main.js.map