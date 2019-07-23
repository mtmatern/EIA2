namespace endabgabe {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", keyPressed);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let seaworldthingsArray: SeaworldThings[] = [];

    let gamingFish: GamingFish;
    
    let fps: number = 30;
    let imageData: ImageData;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", spawnSnacks);
        crc = canvas.getContext("2d");

        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        gamingFish = new GamingFish();
        

        for (let i: number = 0; i < 12; i++) {

            let fish1: Fish1;
            fish1 = new Fish1();
            seaworldthingsArray.push(fish1);
            fish1.draw();
        }
        for (let i: number = 0; i < 8; i++) {
            let fish2: Fish2;
            fish2 = new Fish2();
            seaworldthingsArray.push(fish2);
            fish2.draw();
        }
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

    function keyPressed(_event: KeyboardEvent){
        switch (_event.keyCode) {
            case 65: {
            //Left arrow was pressed
                gamingFish.move("left");
                break;
            }
            case 68: { 
            //Right arrow was pressed
                gamingFish.move("right");
                break;
            } 
            case 87: {
            //Up arrow was pressed
                gamingFish.move("up");
                break;
            }
            case 83: {
            //Down arrow was pressed
                gamingFish.move("down");
                break;
            } 
          
          
        }
      }

    function spawnSnacks(_event: MouseEvent): void {
        let xMousePos: number = _event.clientX;
        let yMousePos: number = _event.clientY;
        let snackNumber: number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        //Ich wollte eigentlich mehrere Snacks spawnen lassen, aber irgendwie gehts nicht. Warum?
        for(let i: number = 0; i < snackNumber; i++){
            let snacks: Snack = new Snack(xMousePos, yMousePos);
            snacks.x = xMousePos - 9;
		    snacks.y = yMousePos - 12;
            seaworldthingsArray.push(snacks);
            //snacks.draw();
        }


    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < seaworldthingsArray.length; i++) {
            seaworldthingsArray[i].update();
        }
        gamingFish.draw();

        collisionWithOtherFish();
    }

    function collisionWithOtherFish(): void {
        for(let i: number = 0; i<= seaworldthingsArray.length; i++){
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

    
    

   


}
