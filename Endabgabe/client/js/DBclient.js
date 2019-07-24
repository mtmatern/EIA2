var endabgabe;
(function (endabgabe) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://bollerwagenserver.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + endabgabe.playerName + "&score=" + endabgabe.score;
        sendRequest(query, handleInsertResponse);
        //console.log(query);
    }
    endabgabe.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    endabgabe.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
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
            let allPlayers = JSON.parse(xhr.response);
            //let SortierteScores: string[] = [];
            /*  for (let i: number = 0; i < allPlayers.length; i++) {
                 let nameS: string = allPlayers[i].name;
                 let scoreS: number = allPlayers[i].score;
 
                 allPlayers.sort(compareNumbers);
             } */
            console.log("PLayerliste:" + allPlayers);
            for (let i = 0; i < 5; i++) {
                //let divElement: HTMLDivElement = document.createElement("div");
                //divElement.innerHTML = `<div> Spieler: ${allPlayers[i].name} Score: ${allPlayers[i].score} </div>`;
                //document.getElementById("highscores").appendChild(divElement);
                let output = document.getElementsByTagName("textarea")[i];
                output.value = xhr.response;
                let responseJASON = JSON.parse(xhr.response);
                console.log("Response: " + responseJASON);
            }
        }
    }
    /* function compareNumbers(a: Player, b: Player): number {
        let scoreA: number = a.score;
        let scoreB: number = b.score;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    } */
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=DBclient.js.map