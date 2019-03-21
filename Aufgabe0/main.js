/**
Aufgabe: 0
Name: Manuel Matern
Matrikel: 261185
Datum: 22.03.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
function name1() {
    var i = prompt("Wie heisst du?");
    document.getElementById("content").innerHTML += "Hallo " + i + ", freut mich, dass du hier bist.";
    console.log("Hallo ", i, ", freut mich, dass du hier bist.");
}
document.addEventListener('DOMContentLoaded', name1);
//# sourceMappingURL=main.js.map