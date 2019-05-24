"use strict";
/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./Database");
console.log("Server starting");
let port = Number(process.env.PORT); /* Schauen auf welchem Port wir liegen und wenn nicht legen wir ihn fest */
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    let query = Url.parse(_request.url, true).query; /*Parsen die URL in einen Assoziativen string string. Also aus URL ein Array: mit command ist der key und insert. name key, scheuerle... */
    let command = query["command"]; /*Legen eine variable command an und legen dann das rein, was unter command drin steht. Also zum Beispiel command = insert */
    switch (command) { /*Welches Kommando haben wir bekommen? Zum Beispiel insert oder refresh */
        case "insert": /*Legen ein neues Objekt vom typ interface Student Data an */
            let student = {
                name: query["name"],
                firstname: query["firstname"],
                matrikel: parseInt(query["matrikel"]) /* Holen uns die Daten aus der query drin */
            };
            Database.insert(student); /* Aus db füg den studenten ein */
            respond(_response, "storing data"); /* Ruf respond auf. alert storing data wenn insert */
            break;
        //Für Suche einbauen command ist gleich
        case "refresh":
            Database.findAll(findCallback);
            break;
        case "search":
            Database.find(findCallback, parseInt(query["matrikel"]));
            break;
        default:
            respond(_response, "unknown command: " + command); /* Folgendes ist angekommen aber das kenne ich nicht */
            break;
    }
    // findCallback is an inner function so that _response is in scope
    function findCallback(json) {
        respond(_response, json);
    }
}
function respond(_response, _text) {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text); /* Schreibe das was zurück kommt. Das ist die Antwort */
    _response.end();
}
//# sourceMappingURL=Server.js.map