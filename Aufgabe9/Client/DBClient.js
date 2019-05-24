"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://bollerwagenserver.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert"; /* Geht die Elemente durch und hängt sie ande query string an localhost:8100/? command = insert &name =Scheurle & first= ...*/
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh"; /* Sende die Anfrage mit dem command refresh localhost:8100/? command = refresh*/
        sendRequest(query, handleFindResponse);
    }
    function search(_event) {
        let query = "command=search";
        query += "&matrikel=" + document.getElementById("search").value;
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback); /* Wenn wir fertig sind (readystatechange status) adde einen event listener und rufe die Funktion auf die dir hier in callback übergeben wurde*/
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0]; //Packt Antwort rein
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DBClient || (DBClient = {}));
//Button mit neuer anfrage an server der  die abgfängt und an db weitergibt sucht und die response zurück gibt und in textarea ausgeben 
//# sourceMappingURL=DBClient.js.map