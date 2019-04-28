/*
Aufgabe: 5 Name: Manuel Matern
Matrikel: 261185
Datum: 25.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */
var task5;
(function (task5) {
    //Eventlistener
    document.addEventListener("DOMContentLoaded", initialize);
    document.addEventListener("DOMContentLoaded", buttonEvent);
    function initialize(_event) {
        showHomoArr(task5.product);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", preisBerechnen);
        }
    }
    function showHomoArr(_homoVar) {
        for (let array in _homoVar) {
            let speicher = _homoVar[array];
            for (let i = 0; i < speicher.length; i++) {
                erstelleInputs(speicher[i]);
            }
        }
    }
    function erstelleInputs(_y) {
        let inputs = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", _y.id);
        label.innerText = _y.name;
        inputs.setAttribute("type", _y.type);
        inputs.setAttribute("name", _y.name);
        inputs.setAttribute("value", _y.value.toString());
        inputs.setAttribute("id", _y.id);
        inputs.setAttribute("class", _y.class);
        inputs.appendChild(label);
        document.getElementById("container").appendChild(inputs);
    }
    let n = 0;
    function buttonEvent() {
        let button = document.getElementById("checkButton");
        button.addEventListener("click", pruefungDerDaten);
        /* document.getElementById("checkButton").addEventListener("click", pruefungDerDaten); */
        /* console.log(showPrice + "wurde ausgeführt") */
        /*  let fieldsets: HTMLCollectionOf< HTMLFieldSetElement> = document.getElementsByTagName("fieldset"); */
    }
    //Preisberechnung und Erstellung von p Tag im Checkout
    function preisBerechnen(_event) {
        n = 0;
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
                n += stepperNumber;
                if (stepperNumber > 0) {
                    let OrderName = document.createElement("li");
                    OrderName.innerHTML = `<p>${stepperNumber} ${input[i].className}</p>`;
                    document.getElementById("Order").appendChild(OrderName);
                }
            }
        }
        document.getElementById("showprice").innerHTML = n.toFixed(2).toString();
    }
    function pruefungDerDaten(_event) {
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
})(task5 || (task5 = {}));
//# sourceMappingURL=main.js.map