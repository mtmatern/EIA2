namespace endabgabe {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let score: number = 0;
    export let playerName: string;
    let seaworldthingsArray: SeaworldThings[] = [];
    let seaworldFoodArray: Snack[] = [];
    export let gamingFish: GamingFish;
    export let fish1: Fish1;
    export let fish2: Fish2;
    export let fish3: Fish3;
    let snacks: Snack;

    let round: number = 1;

    let fps: number = 30;
    let imageData: ImageData;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", spawnSnacks);
        crc = canvas.getContext("2d");
        refresh();

        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        gamingFish = new GamingFish();


        for (let i: number = 0; i < 6; i++) {

            fish1 = new Fish1();
            seaworldthingsArray.push(fish1);
            fish1.draw();
        }
        for (let i: number = 0; i < 20; i++) {

            fish2 = new Fish2();
            seaworldthingsArray.push(fish2);
            fish2.draw();
        }
        /* for (let i: number = 0; i < 10; i++) {
    
            fish3 = new Fish3();
            seaworldthingsArray.push(fish3);
            fish3.draw();
        } */
        for (let i: number = 0; i < 10; i++) {
            let bubble: Bubble;
            bubble = new Bubble();
            seaworldthingsArray.push(bubble);
            bubble.draw();
        }
        for (let i: number = 0; i < 15; i++) {
            let bubble2: Bubble;
            bubble2 = new Bubble();
            seaworldthingsArray.push(bubble2);
            bubble2.draw();
        }
        update();
    }

    function keyPressed(_event: KeyboardEvent) {
        switch (_event.keyCode) {
            case 65: {
                //Left arrow was pressed
                gamingFish.dx = -10;
                break;
            }
            case 68: {
                //Right arrow was pressed
                gamingFish.dx = 10;
                break;
            }
            case 87: {
                //Up arrow was pressed
                gamingFish.dy = -10;
                break;
            }
            case 83: {
                //Down arrow was pressed
                gamingFish.dy = 10;
                break;
            }


        }
    }

    function keyReleased(_event: KeyboardEvent) {
        switch (_event.keyCode) {
            case 65: {
                //Left arrow was pressed
                gamingFish.dx = 0;
                break;
            }
            case 68: {
                //Right arrow was pressed
                gamingFish.dx = 0;
                break;
            }
            case 87: {
                //Up arrow was pressed
                gamingFish.dy = 0;
                break;
            }
            case 83: {
                //Down arrow was pressed
                gamingFish.dy = 0;
                break;
            }


        }
    }

    function spawnSnacks(_event: MouseEvent): void {
        let xMousePos: number = _event.clientX;
        let yMousePos: number = _event.clientY;
        let snackNumber: number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        for (let i: number = 0; i < snackNumber; i++) {
            snacks = new Snack(xMousePos, yMousePos);

            seaworldFoodArray.push(snacks);
            //snacks.draw();
        }


    }

    let timeout: number;
    //let timeoutUpdate: number ;
    //timeoutUpdate= window.setTimeout(update, 2000);

    function update(): void {
        timeout = window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < seaworldthingsArray.length; i++) {
            seaworldthingsArray[i].update();

        }
        for (let i: number = 0; i < seaworldFoodArray.length; i++) {

            seaworldFoodArray[i].update();

        }
        gamingFish.update();

        collisionWithOtherFish();
        collisionWithFood();



        crc.fillStyle = "black";
        crc.font = "30px Typewriter";
        crc.textAlign = "start";
        crc.fillText("Score: " + score.toString(), 20, 40);
        if (round >= 0) {
            crc.fillStyle = "black";
            crc.font = "30px Typewriter";
            crc.textAlign = "center";
            crc.fillText("ROUND: " + round, canvas.width / 2, 40);
            console.log("ROUND: " + round);
        }
        if (round == 1 && seaworldthingsArray.length == 25) {
            //location.reload();
            //console.log("Array leer");
            //gameOver();
            round += 1;

            gamingFish.x = canvas.width / 2;
            gamingFish.y = canvas.height / 2;

            gamingFish.radiusHeadX = 13;
            gamingFish.radiusHeadY = 20;

            gamingFish.radiusEye = 3;

            gamingFish.radiusIris = 1;

            gamingFish.startTailX = 20;
            gamingFish.startTailY = 2;
            gamingFish.sizeTail1 = gamingFish.radiusHeadX + 30;
            gamingFish.sizeTail2 = gamingFish.radiusHeadX + 36;
            gamingFish.sizeTail3 = 22;
            gamingFish.sizeTail4 = 10;


            gamingFish.hitboxRadiusX = 13;
            gamingFish.hitboxRadiusY = 20;



            for (let i: number = 0; i < 12; i++) {

                fish1 = new Fish1();
                seaworldthingsArray.push(fish1);
                fish1.draw();
            }
            for (let i: number = 0; i < 25; i++) {

                fish2 = new Fish2();
                seaworldthingsArray.push(fish2);
                fish2.draw();
            }
            /* for (let i: number = 0; i < 5; i++) {
    
                fish3 = new Fish3();
                seaworldthingsArray.push(fish3);
                fish3.draw();
            } */
        }
        if (round == 2 && seaworldthingsArray.length == 25) {

            round += 1;

            gamingFish.x = canvas.width / 2;
            gamingFish.y = canvas.height / 2;

            gamingFish.radiusHeadX = 13;
            gamingFish.radiusHeadY = 20;

            gamingFish.radiusEye = 3;

            gamingFish.radiusIris = 1;

            gamingFish.startTailX = 20;
            gamingFish.startTailY = 2;
            gamingFish.sizeTail1 = gamingFish.radiusHeadX + 30;
            gamingFish.sizeTail2 = gamingFish.radiusHeadX + 36;
            gamingFish.sizeTail3 = 22;
            gamingFish.sizeTail4 = 10;


            gamingFish.hitboxRadiusX = 13;
            gamingFish.hitboxRadiusY = 20;

            for (let i: number = 0; i < 12; i++) {

                fish1 = new Fish1();
                seaworldthingsArray.push(fish1);
                fish1.draw();
            }
            for (let i: number = 0; i < 25; i++) {

                fish2 = new Fish2();
                seaworldthingsArray.push(fish2);
                fish2.draw();
            }
            for (let i: number = 0; i < 5; i++) {

                fish3 = new Fish3();
                seaworldthingsArray.push(fish3);
                fish3.draw();
            }
        }
        if (round == 3 && seaworldthingsArray.length == 25) {
            gameOver2();
        }
    }




    function collisionWithOtherFish(): void {
        //console.log("Collision WIht Other Fish");
        for (let i: number = 0; i < seaworldthingsArray.length; i++) {
            let sAi: SeaworldThings = seaworldthingsArray[i];
            let distanceX: number = sAi.x - gamingFish.x;
            let distanceY: number = sAi.y - gamingFish.y;
            let distance: number = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            let distanceHitbox: number = distance - gamingFish.hitboxRadiusX - sAi.hitboxRadius;

            if (distanceHitbox < 0) {
                if (gamingFish.hitboxRadiusX > sAi.hitboxRadius) {
                    seaworldthingsArray.splice(i, 1);

                    gamingFish.hitboxRadiusX += 3;
                    gamingFish.hitboxRadiusY += 3;
                    gamingFish.radiusHeadX += 3;
                    gamingFish.radiusHeadY += 3;

                    gamingFish.radiusEye += 0.5;

                    gamingFish.radiusIris += 0.2;

                    gamingFish.startTailX += 3;
                    //gamingFish.startTailY += 2;
                    gamingFish.sizeTail1 += 3;
                    gamingFish.sizeTail2 += 3;
                    gamingFish.sizeTail3 += 2;
                    gamingFish.sizeTail4 += 2;

                    score += 5;
                    console.log("HibtoxX: " + gamingFish.hitboxRadiusX + " HitboxY: " + gamingFish.hitboxRadiusY)
                }
                if (gamingFish.hitboxRadiusX < sAi.hitboxRadius /* && gamingFish.hitboxRadiusY < sAi.hitboxRadiusY */) {
                    console.log(sAi);
                    gameOver();;
                }
            }

        }
    }



    function collisionWithFood(): void {
        //console.log("Collision With Food");
        for (let a: number = 0; a < seaworldFoodArray.length; a++) {
            let sAi2: Snack = seaworldFoodArray[a];
            let distanceX: number = sAi2.x - gamingFish.x;
            let distanceY: number = sAi2.y - gamingFish.y;
            let distance: number = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            let distanceHitbox: number = distance - gamingFish.hitboxRadiusX - sAi2.hitboxRadius;

            if (distanceHitbox < 0) {
                console.log("Food")
                seaworldFoodArray.splice(a, 1);

                score += 1;
                //console.log("ja");
            }

        }
    }



    export function deleteSnack(): void {
        for (let a: number = 0; a < seaworldFoodArray.length; a++) {
            let sAi2: Snack = seaworldFoodArray[a];
            if (sAi2.y == 600) {
                seaworldFoodArray.splice(a, 1);
            }
        }
    }



    function drawBackground(): void {
        //Water
        let water: CanvasGradient = crc.createLinearGradient(0, 10, 0, 300);
        water.addColorStop(0, "lightblue");
        water.addColorStop(1, "blue");
        crc.fillStyle = water;
        crc.fillRect(0, 0, canvas.width, canvas.height);

        //Sand
        let sand: Path2D = new Path2D();
        sand.moveTo(0, 500);
        sand.lineTo(1000, 500);
        sand.lineTo(1000, 600);
        sand.lineTo(0, 600);
        sand.lineTo(0, 500);

        crc.fillStyle = "BurlyWood";
        crc.fill(sand);
        crc.stroke(sand);

        //Gravel
        for (let i: number = 0; i < 200; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = ((Math.random() * 600) + 500);
            let gravel: Path2D = new Path2D();
            gravel.rect(x, y, 7, 7);
            crc.fillStyle = "grey";
            crc.fill(gravel);
            crc.stroke(gravel);
        }

        //Stone
        let stone: Path2D = new Path2D();
        let stone2: Path2D = new Path2D();
        stone.moveTo(300, 550);
        stone.quadraticCurveTo(100, 200, 50, 550);
        stone.closePath();
        crc.fillStyle = "grey";
        crc.fill(stone);
        crc.stroke(stone);

        stone2.moveTo(200, 550);
        stone2.quadraticCurveTo(250, 350, 450, 550);
        stone2.closePath();
        crc.fillStyle = "Dimgray";
        crc.fill(stone2);
        crc.stroke(stone2);

        //Alga
        let alga: Path2D = new Path2D();
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



        crc.fillStyle = "green";
        crc.fill(alga);
        crc.stroke(alga);
    }

    //document.getElementById("highscores").innerHTML = "";
    //let scoreDiv: HTMLDivElement = document.createElement("div");

    export function gameOver(): void {
        window.clearTimeout(timeout);
        playerName = prompt("Score: " + score, "Type your name here");
        document.getElementById("highscores").innerHTML = "";

        insert();

        refresh();
        //scoreDiv.innerHTML = `<div> Your Score: ${score}</div>`;
        //document.getElementById("highscores").appendChild(scoreDiv);
        //location.reload();
    }

    export function gameOver2(): void {
        window.clearTimeout(timeout);
        playerName = prompt("You beat the game! Highscore: " + score, "Type your name here");
        insert();
    }







}
