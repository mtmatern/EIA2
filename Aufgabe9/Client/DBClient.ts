import { SSL_OP_SINGLE_DH_USE } from "constants";

namespace DBClient {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://bollerwagenserver.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = < HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = < HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }

    function insert(_event: Event): void {
        let inputs: HTMLCollectionOf< HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert"; /* Geht die Elemente durch und hängt sie ande query string an localhost:8100/? command = insert &name =Scheurle & first= ...*/
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh"; /* Sende die Anfrage mit dem command refresh localhost:8100/? command = refresh*/
        sendRequest(query, handleFindResponse);
    }

    function search(_event: Event): void {
        let query: string = "command=search";
        query += "&matrikel=" + (< HTMLInputElement>document.getElementById("search")).value;
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback); /* Wenn wir fertig sind (readystatechange status) adde einen event listener und rufe die Funktion auf die dir hier in callback übergeben wurde*/
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void { /* Hey wenn die Anfrage kommt öffne*/
        let xhr: XMLHttpRequest = (< XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (< XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0]; //Packt Antwort rein
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}

//Button mit neuer anfrage an server der  die abgfängt und an db weitergibt sucht und die response zurück gibt und in textarea ausgeben 