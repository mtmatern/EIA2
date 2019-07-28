var endabgabe;
(function (endabgabe) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
    endabgabe.score = 0;
    let seaworldthingsArray = [];
    let seaworldFoodArray = [];
    let snacks;
    let round = 1;
    let fps = 30;
    let imageData;
    function init() {
        endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe.canvas.addEventListener("click", spawnSnacks);
        endabgabe.crc = endabgabe.canvas.getContext("2d");
        endabgabe.refresh();
        drawBackground();
        imageData = endabgabe.crc.getImageData(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        endabgabe.gamingFish = new endabgabe.GamingFish();
        for (let i = 0; i < 6; i++) {
            endabgabe.fish1 = new endabgabe.Fish1();
            seaworldthingsArray.push(endabgabe.fish1);
            endabgabe.fish1.draw();
        }
        for (let i = 0; i < 20; i++) {
            endabgabe.fish2 = new endabgabe.Fish2();
            seaworldthingsArray.push(endabgabe.fish2);
            endabgabe.fish2.draw();
        }
        /* for (let i: number = 0; i < 10; i++) {
    
            fish3 = new Fish3();
            seaworldthingsArray.push(fish3);
            fish3.draw();
        } */
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
        for (let i = 0; i < snackNumber; i++) {
            snacks = new endabgabe.Snack(xMousePos, yMousePos);
            seaworldFoodArray.push(snacks);
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
        for (let i = 0; i < seaworldFoodArray.length; i++) {
            seaworldFoodArray[i].update();
        }
        endabgabe.gamingFish.update();
        collisionWithOtherFish();
        collisionWithFood();
        endabgabe.crc.fillStyle = "black";
        endabgabe.crc.font = "30px Typewriter";
        endabgabe.crc.textAlign = "start";
        endabgabe.crc.fillText("Score: " + endabgabe.score.toString(), 20, 40);
        if (round >= 0) {
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.font = "30px Typewriter";
            endabgabe.crc.textAlign = "center";
            endabgabe.crc.fillText("ROUND: " + round, endabgabe.canvas.width / 2, 40);
            console.log("ROUND: " + round);
        }
        if (round == 1 && seaworldthingsArray.length == 25) {
            //location.reload();
            //console.log("Array leer");
            //gameOver();
            round += 1;
            endabgabe.gamingFish.x = endabgabe.canvas.width / 2;
            endabgabe.gamingFish.y = endabgabe.canvas.height / 2;
            endabgabe.gamingFish.radiusHeadX = 13;
            endabgabe.gamingFish.radiusHeadY = 20;
            endabgabe.gamingFish.radiusEye = 3;
            endabgabe.gamingFish.radiusIris = 1;
            endabgabe.gamingFish.startTailX = 20;
            endabgabe.gamingFish.startTailY = 2;
            endabgabe.gamingFish.sizeTail1 = endabgabe.gamingFish.radiusHeadX + 30;
            endabgabe.gamingFish.sizeTail2 = endabgabe.gamingFish.radiusHeadX + 36;
            endabgabe.gamingFish.sizeTail3 = 22;
            endabgabe.gamingFish.sizeTail4 = 10;
            endabgabe.gamingFish.hitboxRadiusX = 13;
            endabgabe.gamingFish.hitboxRadiusY = 20;
            for (let i = 0; i < 12; i++) {
                endabgabe.fish1 = new endabgabe.Fish1();
                seaworldthingsArray.push(endabgabe.fish1);
                endabgabe.fish1.draw();
            }
            for (let i = 0; i < 25; i++) {
                endabgabe.fish2 = new endabgabe.Fish2();
                seaworldthingsArray.push(endabgabe.fish2);
                endabgabe.fish2.draw();
            }
            /* for (let i: number = 0; i < 5; i++) {
    
                fish3 = new Fish3();
                seaworldthingsArray.push(fish3);
                fish3.draw();
            } */
        }
        if (round == 2 && seaworldthingsArray.length == 25) {
            round += 1;
            endabgabe.gamingFish.x = endabgabe.canvas.width / 2;
            endabgabe.gamingFish.y = endabgabe.canvas.height / 2;
            endabgabe.gamingFish.radiusHeadX = 13;
            endabgabe.gamingFish.radiusHeadY = 20;
            endabgabe.gamingFish.radiusEye = 3;
            endabgabe.gamingFish.radiusIris = 1;
            endabgabe.gamingFish.startTailX = 20;
            endabgabe.gamingFish.startTailY = 2;
            endabgabe.gamingFish.sizeTail1 = endabgabe.gamingFish.radiusHeadX + 30;
            endabgabe.gamingFish.sizeTail2 = endabgabe.gamingFish.radiusHeadX + 36;
            endabgabe.gamingFish.sizeTail3 = 22;
            endabgabe.gamingFish.sizeTail4 = 10;
            endabgabe.gamingFish.hitboxRadiusX = 13;
            endabgabe.gamingFish.hitboxRadiusY = 20;
            for (let i = 0; i < 12; i++) {
                endabgabe.fish1 = new endabgabe.Fish1();
                seaworldthingsArray.push(endabgabe.fish1);
                endabgabe.fish1.draw();
            }
            for (let i = 0; i < 25; i++) {
                endabgabe.fish2 = new endabgabe.Fish2();
                seaworldthingsArray.push(endabgabe.fish2);
                endabgabe.fish2.draw();
            }
            for (let i = 0; i < 5; i++) {
                endabgabe.fish3 = new endabgabe.Fish3();
                seaworldthingsArray.push(endabgabe.fish3);
                endabgabe.fish3.draw();
            }
        }
        if (round == 3 && seaworldthingsArray.length == 25) {
            gameOver2();
        }
    }
    function collisionWithOtherFish() {
        //console.log("Collision WIht Other Fish");
        for (let i = 0; i < seaworldthingsArray.length; i++) {
            let sAi = seaworldthingsArray[i];
            let distanceX = sAi.x - endabgabe.gamingFish.x;
            let distanceY = sAi.y - endabgabe.gamingFish.y;
            let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            let distanceHitbox = distance - endabgabe.gamingFish.hitboxRadiusX - sAi.hitboxRadius;
            if (distanceHitbox < 0) {
                if (endabgabe.gamingFish.hitboxRadiusX > sAi.hitboxRadius) {
                    seaworldthingsArray.splice(i, 1);
                    endabgabe.gamingFish.hitboxRadiusX += 3;
                    endabgabe.gamingFish.hitboxRadiusY += 3;
                    endabgabe.gamingFish.radiusHeadX += 3;
                    endabgabe.gamingFish.radiusHeadY += 3;
                    endabgabe.gamingFish.radiusEye += 0.5;
                    endabgabe.gamingFish.radiusIris += 0.2;
                    endabgabe.gamingFish.startTailX += 3;
                    //gamingFish.startTailY += 2;
                    endabgabe.gamingFish.sizeTail1 += 3;
                    endabgabe.gamingFish.sizeTail2 += 3;
                    endabgabe.gamingFish.sizeTail3 += 2;
                    endabgabe.gamingFish.sizeTail4 += 2;
                    endabgabe.score += 5;
                    console.log("HibtoxX: " + endabgabe.gamingFish.hitboxRadiusX + " HitboxY: " + endabgabe.gamingFish.hitboxRadiusY);
                }
                if (endabgabe.gamingFish.hitboxRadiusX < sAi.hitboxRadius /* && gamingFish.hitboxRadiusY < sAi.hitboxRadiusY */) {
                    console.log(sAi);
                    gameOver();
                    ;
                }
            }
        }
    }
    function collisionWithFood() {
        //console.log("Collision With Food");
        for (let a = 0; a < seaworldFoodArray.length; a++) {
            let sAi2 = seaworldFoodArray[a];
            let distanceX = sAi2.x - endabgabe.gamingFish.x;
            let distanceY = sAi2.y - endabgabe.gamingFish.y;
            let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            let distanceHitbox = distance - endabgabe.gamingFish.hitboxRadiusX - sAi2.hitboxRadius;
            if (distanceHitbox < 0) {
                console.log("Food");
                seaworldFoodArray.splice(a, 1);
                endabgabe.score += 1;
                //console.log("ja");
            }
        }
    }
    function deleteSnack() {
        for (let a = 0; a < seaworldFoodArray.length; a++) {
            let sAi2 = seaworldFoodArray[a];
            if (sAi2.y == 600) {
                seaworldFoodArray.splice(a, 1);
            }
        }
    }
    endabgabe.deleteSnack = deleteSnack;
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
    //document.getElementById("highscores").innerHTML = "";
    //let scoreDiv: HTMLDivElement = document.createElement("div");
    function gameOver() {
        window.clearTimeout(timeout);
        endabgabe.playerName = prompt("Score: " + endabgabe.score, "Type your name here");
        document.getElementById("highscores").innerHTML = "";
        endabgabe.insert();
        endabgabe.refresh();
        //scoreDiv.innerHTML = `<div> Your Score: ${score}</div>`;
        //document.getElementById("highscores").appendChild(scoreDiv);
        //location.reload();
    }
    endabgabe.gameOver = gameOver;
    function gameOver2() {
        window.clearTimeout(timeout);
        endabgabe.playerName = prompt("You beat the game! Highscore: " + endabgabe.score, "Type your name here");
        endabgabe.insert();
    }
    endabgabe.gameOver2 = gameOver2;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=canvas.js.map