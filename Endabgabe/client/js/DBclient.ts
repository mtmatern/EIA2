namespace endabgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://bollerwagenserver.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + playerName + "&score=" + score;
        sendRequest(query, handleInsertResponse);
        console.log(query);
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
            //let SortierteScores: string[] = [];

            for (let i: number = 0; i < allPlayers.length; i++) {
                let nameS: string = allPlayers[i].name;
                let scoreS: number = allPlayers[i].score;

                allPlayers.sort(compareNumbers);
            }
           
            console.log(allPlayers);
            for (let i: number = 0; i < 6; i++) {
                // document.getElementById("scoresBeste").innerHTML = "";
                let prodElement: HTMLDivElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${allPlayers[i].name} : ${allPlayers[i].score} Score</div>`;
                document.getElementById("highscores").appendChild(prodElement);
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