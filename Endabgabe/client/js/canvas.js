var endabgabe;
(function (endabgabe) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    endabgabe.score = 0;
    let seaworldthingsArray = [];
    let round = 1;
    let fps = 30;
    let imageData;
    function init() {
        endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe.canvas.addEventListener("click", spawnSnacks);
        endabgabe.crc = endabgabe.canvas.getContext("2d");
        drawBackground();
        imageData = endabgabe.crc.getImageData(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        endabgabe.gamingFish = new endabgabe.GamingFish();
        for (let i = 0; i < 12; i++) {
            endabgabe.fish1 = new endabgabe.Fish1();
            seaworldthingsArray.push(endabgabe.fish1);
            endabgabe.fish1.draw();
        }
        for (let i = 0; i < 20; i++) {
            endabgabe.fish2 = new endabgabe.Fish2();
            seaworldthingsArray.push(endabgabe.fish2);
            endabgabe.fish2.draw();
        }
        for (let i = 0; i < 10; i++) {
            let bubble;
            bubble = new endabgabe.Bubble();
            seaworldthingsArray.push(bubble);
            bubble.draw();
        }
        for (let i = 0; i < 15; i++) {
            let bubble2;
            bubble2 = new endabgabe.Bubble();
            seaworldthingsArray.push(bubble2);
            bubble2.draw();
        }
        update();
    }
    function keyPressed(_event) {
        switch (_event.keyCode) {
            case 65: {
                //Left arrow was pressed
                endabgabe.gamingFish.dx = -10;
                break;
            }
            case 68: {
                //Right arrow was pressed
                endabgabe.gamingFish.dx = 10;
                break;
            }
            case 87: {
                //Up arrow was pressed
                endabgabe.gamingFish.dy = -10;
                break;
            }
            case 83: {
                //Down arrow was pressed
                endabgabe.gamingFish.dy = 10;
                break;
            }
        }
    }
    function keyReleased(_event) {
        switch (_event.keyCode) {
            case 65: {
                //Left arrow was pressed
                endabgabe.gamingFish.dx = 0;
                break;
            }
            case 68: {
                //Right arrow was pressed
                endabgabe.gamingFish.dx = 0;
                break;
            }
            case 87: {
                //Up arrow was pressed
                endabgabe.gamingFish.dy = 0;
                break;
            }
            case 83: {
                //Down arrow was pressed
                endabgabe.gamingFish.dy = 0;
                break;
            }
        }
    }
    function spawnSnacks(_event) {
        let xMousePos = _event.clientX;
        let yMousePos = _event.clientY;
        let snackNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        //Ich wollte eigentlich mehrere Snacks spawnen lassen, aber irgendwie gehts nicht. Warum?
        for (let i = 0; i < snackNumber; i++) {
            let snacks = new endabgabe.Snack(xMousePos, yMousePos);
            snacks.x = xMousePos - 9;
            snacks.y = yMousePos - 12;
            seaworldthingsArray.push(snacks);
            //snacks.draw();
        }
    }
    let timeout;
    //let timeoutUpdate: number ;
    //timeoutUpdate= window.setTimeout(update, 2000);
    function update() {
        timeout = window.setTimeout(update, 1000 / fps);
        endabgabe.crc.clearRect(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        endabgabe.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < seaworldthingsArray.length; i++) {
            seaworldthingsArray[i].update();
        }
        endabgabe.gamingFish.update();
        collisionWithOtherFish();
        endabgabe.crc.fillStyle = "black";
        endabgabe.crc.font = "30px Typewriter";
        endabgabe.crc.textAlign = "start";
        endabgabe.crc.fillText("Score: " + endabgabe.score.toString(), 20, 40);
        if (seaworldthingsArray.length == 57) {
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.font = "100px Arial";
            endabgabe.crc.textAlign = "center";
            endabgabe.crc.fillText("ROUND: " + round, endabgabe.canvas.width / 2, endabgabe.canvas.height / 2);
            console.log("ROUND: " + round);
        }
        if (seaworldthingsArray.length == 25) {
            //location.reload();
            //console.log("Array leer");
            //gameOver();
            round += 1;
            for (let i = 0; i < 12; i++) {
                endabgabe.fish1 = new endabgabe.Fish1();
                seaworldthingsArray.push(endabgabe.fish1);
                endabgabe.fish1.draw();
            }
            for (let i = 0; i < 20; i++) {
                endabgabe.fish2 = new endabgabe.Fish2();
                seaworldthingsArray.push(endabgabe.fish2);
                endabgabe.fish2.draw();
            }
        }
    }
    //clearTimeout(timeoutUpdate);
    function collisionWithOtherFish() {
        for (let i = 0; i < seaworldthingsArray.length; i++) {
            let sAi = seaworldthingsArray[i];
            let distanceX = sAi.x - endabgabe.gamingFish.x;
            let distanceY = sAi.y - endabgabe.gamingFish.y;
            let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            let distanceHitbox = distance - endabgabe.gamingFish.hitboxRadiusX - sAi.hitboxRadius;
            if (distanceHitbox < 0) {
                if (endabgabe.gamingFish.hitboxRadiusX > sAi.hitboxRadius) {
                    seaworldthingsArray.splice(i, 1);
                    endabgabe.gamingFish.hitboxRadiusX += 2;
                    endabgabe.gamingFish.hitboxRadiusY += 2;
                    endabgabe.gamingFish.radiusHeadX += 2;
                    endabgabe.gamingFish.radiusHeadY += 2;
                    endabgabe.gamingFish.radiusEye += 0.5;
                    endabgabe.gamingFish.radiusIris += 0.2;
                    endabgabe.gamingFish.startTailX += 2;
                    //gamingFish.startTailY += 2;
                    endabgabe.gamingFish.sizeTail1 += 3;
                    endabgabe.gamingFish.sizeTail2 += 3;
                    endabgabe.gamingFish.sizeTail3 += 2;
                    endabgabe.gamingFish.sizeTail4 += 2;
                    endabgabe.score += 5;
                }
                if (endabgabe.gamingFish.hitboxRadiusX < sAi.hitboxRadius) {
                    gameOver();
                    ;
                }
            }
        }
    }
    function drawBackground() {
        //Water
        let water = endabgabe.crc.createLinearGradient(0, 10, 0, 300);
        water.addColorStop(0, "lightblue");
        water.addColorStop(1, "blue");
        endabgabe.crc.fillStyle = water;
        endabgabe.crc.fillRect(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        //Sand
        let sand = new Path2D();
        sand.moveTo(0, 500);
        sand.lineTo(1000, 500);
        sand.lineTo(1000, 600);
        sand.lineTo(0, 600);
        sand.lineTo(0, 500);
        endabgabe.crc.fillStyle = "BurlyWood";
        endabgabe.crc.fill(sand);
        endabgabe.crc.stroke(sand);
        //Gravel
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * endabgabe.canvas.width;
            let y = ((Math.random() * 600) + 500);
            let gravel = new Path2D();
            gravel.rect(x, y, 7, 7);
            endabgabe.crc.fillStyle = "grey";
            endabgabe.crc.fill(gravel);
            endabgabe.crc.stroke(gravel);
        }
        //Stone
        let stone = new Path2D();
        let stone2 = new Path2D();
        stone.moveTo(300, 550);
        stone.quadraticCurveTo(100, 200, 50, 550);
        stone.closePath();
        endabgabe.crc.fillStyle = "grey";
        endabgabe.crc.fill(stone);
        endabgabe.crc.stroke(stone);
        stone2.moveTo(200, 550);
        stone2.quadraticCurveTo(250, 350, 450, 550);
        stone2.closePath();
        endabgabe.crc.fillStyle = "Dimgray";
        endabgabe.crc.fill(stone2);
        endabgabe.crc.stroke(stone2);
        //Alga
        let alga = new Path2D();
        alga.moveTo(850, 530);
        alga.quadraticCurveTo(700, 490, 850, 500);
        alga.moveTo(850, 530);
        alga.quadraticCurveTo(1000, 490, 850, 500);
        alga.moveTo(850, 500);
        alga.quadraticCurveTo(700, 460, 850, 470);
        alga.moveTo(850, 500);
        alga.quadraticCurveTo(1000, 460, 850, 470);
        alga.moveTo(850, 470);
        alga.quadraticCurveTo(700, 430, 850, 440);
        alga.moveTo(850, 470);
        alga.quadraticCurveTo(1000, 430, 850, 440);
        alga.moveTo(850, 440);
        alga.quadraticCurveTo(700, 400, 850, 410);
        alga.moveTo(850, 440);
        alga.quadraticCurveTo(1000, 400, 850, 410);
        alga.moveTo(850, 410);
        alga.quadraticCurveTo(750, 370, 850, 380);
        alga.moveTo(850, 410);
        alga.quadraticCurveTo(950, 370, 850, 380);
        alga.moveTo(850, 380);
        alga.quadraticCurveTo(800, 340, 850, 350);
        alga.moveTo(850, 380);
        alga.quadraticCurveTo(900, 340, 850, 350);
        endabgabe.crc.fillStyle = "green";
        endabgabe.crc.fill(alga);
        endabgabe.crc.stroke(alga);
    }
    function highScore() {
        document.getElementById("highscore").innerHTML = "";
        let scoreDiv = document.createElement("div");
        scoreDiv.innerHTML = `<div> Your Score: ${endabgabe.score}</div>`;
        document.getElementById("yourscore").appendChild(scoreDiv);
    }
    endabgabe.highScore = highScore;
    function gameOver() {
        window.clearTimeout(timeout);
        endabgabe.playerName = prompt("Score: " + endabgabe.score, "Type your name here");
        //insert();
        location.reload();
    }
    endabgabe.gameOver = gameOver;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=canvas.js.map