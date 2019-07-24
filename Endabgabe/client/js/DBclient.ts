namespace endabgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://bollerwagenserver.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + playerName + "&score=" + score;
        sendRequest(query, handleInsertResponse);
        //console.log(query);
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
           
            console.log("PLayerliste:" + allPlayers);
            for (let i: number = 0; i < 5; i++) {
                let divElement: HTMLDivElement = document.createElement("div");
                divElement.innerHTML = `<div> Spieler: ${allPlayers[i].name} Score: ${allPlayers[i].score} </div>`;
                document.getElementById("highscores").appendChild(divElement);
                /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[i];
                output.value = xhr.response;
                let responseJASON: JSON = JSON .parse(xhr.response);
                console.log("Response: " + responseJASON); */
            }
        }
    }

    function compareNumbers(a: Player, b: Player): number { 
        let scoreA: number = a.score;
        let scoreB: number = b.score;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
}