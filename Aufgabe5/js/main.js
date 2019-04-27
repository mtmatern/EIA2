/*
Aufgabe: 5 Name: Manuel Matern
Matrikel: 261185
Datum: 25.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */
var task5;
(function (task5) {
    //Eventlistener
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", changeListener);
    function changeListener(_event) {
        let fieldset = document.getElementById("container");
        fieldset.addEventListener("change", handleChange);
    }
    //Variablen
    let preisWaffel = 0;
    let preisBecher = 0;
    let preisSchokolade = 0;
    let preisNuss = 0;
    let preisCookies = 0;
    let preisStracciatella = 0;
    let preisStreusel = 0;
    let preisSchokosoße = 0;
    let preisKaramelsoße = 0;
    let preisSahne = 0;
    function writeHTML() {
        let node = document.getElementById("anrichtung");
        document.getElementById("checkButton").addEventListener("click", pruefungDerDaten);
        /*  let button: HTMLButtonElement = < HTMLButtonElement>document.getElementById("bestellen");
         button.addEventListener("click", pruefungDerDaten) */
        let htmlChildNode = "";
        //Auswahl Waffel oder Becher
        htmlChildNode += "<h2>Wähle: Waffel(+ 0.50€) oder Becher?</h2>";
        for (let i = 0; i < task5.waffelbecher.length; i++) {
            htmlChildNode += "<input type='radio' name='waffelbecher' value='" + i + task5.waffelbecher[i].name + " " + task5.waffelbecher[i].preis + " €'  id='radio1" + i + "' />";
            htmlChildNode += "<label for='radio1" + i + "'>" + task5.waffelbecher[i].name + " ";
        }
        let nodeZwei = document.getElementById("Sorten");
        let htmlChildNodeZwei = "";
        //Auswahl Eissorten
        htmlChildNodeZwei += "<h2>Eissorten</h2>";
        //Schokolade
        htmlChildNodeZwei += "<span>Schokolade: </span>";
        for (let i = 0; i < task5.schokolade.length; i++) {
            htmlChildNodeZwei += "<input type='number' name='Stepper' id='Schokolade' id='0' step='1' min='0' max='6' value='0' />";
        }
        //Nuss
        htmlChildNodeZwei += "<span id='iceLabel'>Nuss: </span>";
        for (let i = 0; i < task5.nuss.length; i++) {
            htmlChildNodeZwei += "<input type='number' name='Stepper' id='Nuss' id='0' step='1' min='0' max='6' value='0' />";
        }
        //Cookies
        htmlChildNodeZwei += "<span id='iceLabel'>Cookies: </span>";
        for (let i = 0; i < task5.cookies.length; i++) {
            htmlChildNodeZwei += "<input type='number' name='Stepper' ids='Cookies' id='0' step='1' min='0' max='6' value='0' />";
        }
        //Stracciatella
        htmlChildNodeZwei += "<span id='iceLabel'>Stracciatella: </span>";
        for (let i = 0; i < task5.cookies.length; i++) {
            htmlChildNodeZwei += "<input type='number' name='Stepper' id='Stracciatella' id='0' step='1' min='0' max='6' value='0' />";
        }
        let nodeDrei = document.getElementById("Extras");
        let htmlChildNodeDrei = "";
        //Auswahl Extras
        htmlChildNodeDrei += "<h2>Extras (Alle je + 0,50€)</h2>";
        //Streusel
        for (let i = 0; i < task5.streusel.length; i++) {
            htmlChildNodeDrei += "<input type='checkbox' name='Streusel' id='Streusel' id='check1' value='0.50' />";
            htmlChildNodeDrei += "<label for='check1'>Streusel</label>";
        }
        //Schokosoße
        for (let i = 0; i < task5.streusel.length; i++) {
            htmlChildNodeDrei += "<input type='checkbox' name='Schokosoße' id='Schokosoße' id='check2' value='0.50' />";
            htmlChildNodeDrei += "<label for='check2'>Schokosoße</label>";
        }
        //Karamelsoße
        for (let i = 0; i < task5.streusel.length; i++) {
            htmlChildNodeDrei += "<input type='checkbox' name='Karamelsoße' id='Karamelsoße' id='check3' value='0.50' />";
            htmlChildNodeDrei += "<label for='check3'>Karamelsoße</label>";
        }
        //Sahne
        for (let i = 0; i < task5.streusel.length; i++) {
            htmlChildNodeDrei += "<input type='checkbox' name='Sahne' id='Sahne' id='check4' value='0.50' />";
            htmlChildNodeDrei += "<label for='check4'>Sahne</label>";
        }
        node.innerHTML += htmlChildNode;
        nodeZwei.innerHTML += htmlChildNodeZwei;
        nodeDrei.innerHTML += htmlChildNodeDrei;
    }
    function handleChange(_event) {
        let target = _event.target;
        //Becher- oder Waffelpreis
        if (target.name == "waffelbecher") {
            let node = document.getElementById("BecheroderWaffel");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisWaffel = task5.waffelbecher[priceIndex].preis;
            console.log(preisWaffel);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Schokolade
        if (target.id == "Schokolade") {
            let node = document.getElementById("Kugel1");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisSchokolade = task5.schokolade[priceIndex].preis * priceIndex;
            console.log(preisSchokolade);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let node = document.getElementById("showprice");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<li>";
        childNodeHTML += (preisWaffel || preisBecher + preisSchokolade + preisNuss + preisCookies + preisStracciatella + preisStreusel + preisSchokosoße + preisKaramelsoße + preisSahne);
        childNodeHTML += " €";
        childNodeHTML += "</li>";
        node.innerHTML = childNodeHTML;
    }
    /* function showPrice(_event: Event): void {
        let button: HTMLButtonElement = < HTMLButtonElement>document.getElementById("bestellen");
        button.addEventListener("click", pruefungDerDaten)
        document.getElementById("checkButton").addEventListener("click", pruefungDerDaten);
        let fieldsets: HTMLCollectionOf< HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", preisBerechnen);
        }
    } */
    //Preisberechnung und Erstellung von p Tag im Checkout
    /*     function preisBerechnen(_event: Event): void {
            let n: number = 0;
            document.getElementById("Order").innerHTML = '';
            let input: HTMLCollectionOf< HTMLInputElement> = document.getElementsByTagName("input");
            for (let i: number = 0; i < input.length; i++) {
                if (input[i].checked == true) {
                    let preis: number = Number(input[i].value);
                    n += preis;
                    let OrderName: HTMLLIElement = document.createElement("li");
                    OrderName.innerHTML = `<p>${input[i].className}</p>`
                    document.getElementById("Order").appendChild(OrderName);
    
                }
                if (input[i].name == "Stepper") {
                    let stepperNumber: number = Number(input[i].value);
                    n += stepperNumber;
                    if (stepperNumber > 0) {
                        let OrderName: HTMLLIElement = document.createElement("li");
                        OrderName.innerHTML = `<p>${stepperNumber} ${input[i].className}</p>`
                        document.getElementById("Order").appendChild(OrderName);
                    }
                }
            }
    
            document.getElementById("showprice").innerHTML = n.toFixed(2).toString();
        } */
    function pruefungDerDaten(_event) {
        if (preisWaffel == 0 || preisBecher == 0 || preisSchokolade == 0) {
            alert("fehlt noch");
        }
        else {
            alert("Ihre Bestellung wurde erfolgreich abgesendet! Vielen Dank:)");
        }
    }
    /* function pruefungDerDaten(): void {
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
    } */
})(task5 || (task5 = {}));
//# sourceMappingURL=main.js.map