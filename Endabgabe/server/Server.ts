
import * as Http from "http";
import * as Url from "url";
import * as Database from "./Database";

console.log("Server starting");

let port: number = Number(process.env.PORT); //Schauen auf welchem Port wir liegen und wenn nicht legen wir ihn fest
if (!port)
    port = 8100;


let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);



function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: Score = < Score> Url.parse(_request.url, true).query; //Parsen die URL in einen Assoziativen string string. Also aus URL ein Array: mit command ist der key und insert. name key, scheuerle...
    let command: string = query["command"];  //Legen eine variable command an und legen dann das rein, was unter command drin steht. Also zum Beispiel command = insert

    switch (command) {  //Welches Kommando haben wir bekommen? Zum Beispiel insert oder refresh
        case "insert": //Legen ein neues Objekt vom typ interface Student Data an
            let player: Player = {
                name: query["name"],
                score: parseInt(query["score"]) //Holen uns die Daten aus der query drin
            };
            Database.insert(player); //Aus db füg den studenten ein
            respond(_response, "storing data"); //Ruf respond auf. alert storing data wenn insert
            break;
            //Für Suche einbauen command ist gleich
        case "refresh":
            Database.findAll(findCallback);
            break;
        /* case "search":
            Database.find(findCallback, parseInt(query["matrikel"]));
            break; */
        default:
            respond(_response, "unknown command: " + command); //Folgendes ist angekommen aber das kenne ich nicht
            break;
    }

    // findCallback is an inner function so that _response is in scope
    function findCallback(json: string): void {
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text); //Schreibe das was zurück kommt. Das ist die Antwort
    _response.end();
}