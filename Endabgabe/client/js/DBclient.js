var endabgabe;
(function (endabgabe) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://bollerwagenserver.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + endabgabe.playerName + "&score=" + endabgabe.score;
        sendRequest(query, handleInsertResponse);
        console.log(query);
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
    //let score: number = 0;
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
            for (let i = 0; i < allPlayers.length; i++) {
                let nameS = allPlayers[i].name;
                let scoreS = allPlayers[i].score;
                allPlayers.sort(compareNumbers);
            }
            console.log(allPlayers);
            for (let i = 0; i < 6; i++) {
                // document.getElementById("scoresBeste").innerHTML = "";
                let prodElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${allPlayers[i].name} : ${allPlayers[i].score} Punkte</div>`;
                document.getElementById("scoresBeste").appendChild(prodElement);
            }
        }
    }
    function compareNumbers(a, b) {
        let scoreA = a.score;
        let scoreB = b.score;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=DBclient.js.map