/*
Aufgabe: 7 Name: Manuel Matern
Matrikel: 261185
Datum: 12.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */
var task7;
(function (task7) {
    //Eventlistener
    document.addEventListener("DOMContentLoaded", initialize);
    //Aufruf showHomoArr, Kollektion der fieldsets, Eventlistener change und preisBerechnen Verweis
    function initialize(_event) {
        checkButton();
        sendButton(_event);
        showHomoArr(task7.product);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", preisBerechnen);
        }
    }
    //Variable zur späteren Verwendung
    let n = 0;
    //Funktionen für die Buttonas. Verweis von pruefungDerDaten Funktion und sendRequestWithCustomData
    function checkButton() {
        let button1 = document.getElementById("checkButton");
        button1.addEventListener("click", pruefungDerDaten);
    }
    function sendButton(_event) {
        let button2 = document.getElementById("sendButton");
        button2.addEventListener("click", sendRequestWithCustomData);
    }
    //Funktion für die Datenübertragung
    //let urlAddress: string = "http://localhost:8100";
    let urlAddress = "https://bollerwagenserver.herokuapp.com/";
    function sendRequestWithCustomData(_event) {
        let input = document.getElementsByTagName("input");
        let bestellung = "?";
        for (let i = 0; i < input.length; i++) {
            if (input[i].value != "0" && input[i].value != "") {
                bestellung += input[i].name + "= " + input[i].value + "&";
            }
            if (input[i].checked == true) {
                bestellung += input[i].name + "= " + input[i].className + "&";
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", urlAddress + bestellung, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("serverResponse").innerHTML = "<h2>Diese Bestellung ist bei uns eingegangen:";
            document.getElementById("serverResponse").innerHTML += (xhr.response);
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    //Anzeigen von HomogenousArray und Erstellung von hr und p Elementen zur Abgrenzung
    function showHomoArr(_homoVar) {
        for (let array in _homoVar) {
            let safe = _homoVar[array];
            let hr = document.createElement("hr");
            let p = document.createElement("p");
            p.innerHTML = `<p id="wahlüberschriften">${array}</p>`;
            document.getElementById("container").appendChild(hr);
            document.getElementById("container").appendChild(p);
            for (let i = 0; i < safe.length; i++) {
                erstelleInputs(safe[i]);
            }
        }
    }
    //Erstellen der Inputs
    function erstelleInputs(_y) {
        let inputs = document.createElement("input");
        let label = document.createElement("label");
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
        /* if(_y.id == "radio1" || "radio2") {
            inputs.setAttribute("name", "Darreichungsform");
        } */
    }
    //Preisberechnung und Erstellung von p Tag im Checkout
    function preisBerechnen(_event) {
        n = 0;
        document.getElementById("Order").innerHTML = '';
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis = Number(input[i].alt);
                n += preis;
                let OrderName = document.createElement("li");
                OrderName.innerHTML = `<p>${input[i].className}</p>`;
                document.getElementById("Order").appendChild(OrderName);
            }
            if (input[i].type == "number") {
                let stepperNumber = Number(input[i].value);
                console.log(stepperNumber);
                let preis = Number(input[i].alt);
                n += preis * stepperNumber;
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
        let sorteAuswählen = 0;
        let anrichtungAuswählen = 0;
        for (let i = 0; i < pruefung.length; i++) {
            if (pruefung[i].type == "text") {
                if (pruefung[i].value == "") {
                    let feldName = pruefung[i].name;
                    leereFormulare.push(feldName);
                }
            }
            if (pruefung[i].type == "radio") {
                if (pruefung[i].checked) {
                    anrichtungAuswählen = 1;
                }
            }
            if (pruefung[i].type == "number") {
                if (Number(pruefung[i].value) > 0) {
                    sorteAuswählen = 1;
                }
            }
        }
        if (anrichtungAuswählen == 0) {
            alert("Bitte eine Anrichtung auswählen");
        }
        if (sorteAuswählen == 0) {
            alert("Bitte mindestens eine Sorte auswählen");
        }
        if (leereFormulare.length == 0) {
            alert("Ihre Auswahl ist komplett. Klicken sie nun auf Bestellung absenden. Vielen Dank");
        }
        else {
            alert(`${leereFormulare} fehlt noch`);
        }
    }
    //customizedUrl();
})(task7 || (task7 = {}));
//# sourceMappingURL=main.js.map