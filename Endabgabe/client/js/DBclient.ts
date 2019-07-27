namespace endabgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://bollerwagenserver.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + playerName + "&score=" + score;
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let allPlayers: Player[] = JSON.parse(xhr.response);


            for (let i: number = 0; i < allPlayers.length; i++) {

                allPlayers.sort(compareNumbers);
            }
           
            //console.log("PLayerliste:" + allPlayers);
            for (let i: number = 0; i < 15; i++) {
                let divElement: HTMLDivElement = document.createElement("div");
                divElement.innerHTML = `<div> Spieler: ${allPlayers[i].name} : ${allPlayers[i].score} </div>`;
                document.getElementById("highscores").appendChild(divElement);
                /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[i];
                output.value = xhr.response;
                let responseJASON: JSON = JSON .parse(xhr.response);
                console.log("Response: " + responseJASON); */
            }
        }
    }

    function compareNumbers(_scoreOne: Player, _scoreTwo: Player): number { 
        if (_scoreOne.score < _scoreTwo.score) {
            return 1;
        }
        if (_scoreOne.score > _scoreTwo.score) {
            return -1;
        }
        return 0;
    }
}