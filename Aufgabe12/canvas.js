var task12;
(function (task12) {
    document.addEventListener("DOMContentLoaded", init);
    let seaworldthingsArray = [];
    let fps = 30;
    let imageData;
    function init() {
        task12.canvas = document.getElementsByTagName("canvas")[0];
        task12.canvas.addEventListener("click", spawnSnacks);
        task12.crc = task12.canvas.getContext("2d");
        drawBackground();
        imageData = task12.crc.getImageData(0, 0, task12.canvas.width, task12.canvas.height);
        for (let i = 0; i < 12; i++) {
            let fish1;
            fish1 = new task12.Fish1();
            seaworldthingsArray.push(fish1);
            fish1.draw();
        }
        for (let i = 0; i < 8; i++) {
            let fish2;
            fish2 = new task12.Fish2();
            seaworldthingsArray.push(fish2);
            fish2.draw();
        }
        for (let i = 0; i < 10; i++) {
            let bubble;
            bubble = new task12.Bubble();
            seaworldthingsArray.push(bubble);
            bubble.draw();
        }
        for (let i = 0; i < 15; i++) {
            let bubble2;
            bubble2 = new task12.Bubble();
            seaworldthingsArray.push(bubble2);
            bubble2.draw();
        }
        update();
    }
    function spawnSnacks(_event) {
        let xMousePos = _event.clientX;
        let yMousePos = _event.clientY;
        let snackNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        //Ich wollte eigentlich mehrere Snacks spawnen lassen, aber irgendwie gehts nicht. Warum?
        for (let i = 0; i < snackNumber; i++) {
            let snacks = new task12.Snack(xMousePos, yMousePos);
            snacks.x = xMousePos - 9;
            snacks.y = yMousePos - 12;
            seaworldthingsArray.push(snacks);
            //snacks.draw();
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        task12.crc.clearRect(0, 0, task12.canvas.width, task12.canvas.height);
        task12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < seaworldthingsArray.length; i++) {
            seaworldthingsArray[i].update();
        }
    }
    function drawBackground() {
        //Water
        let water = task12.crc.createLinearGradient(0, 10, 0, 300);
        water.addColorStop(0, "lightblue");
        water.addColorStop(1, "blue");
        task12.crc.fillStyle = water;
        task12.crc.fillRect(0, 0, task12.canvas.width, task12.canvas.height);
        //Sand
        let sand = new Path2D();
        sand.moveTo(0, 500);
        sand.lineTo(1000, 500);
        sand.lineTo(1000, 600);
        sand.lineTo(0, 600);
        sand.lineTo(0, 500);
        task12.crc.fillStyle = "BurlyWood";
        task12.crc.fill(sand);
        task12.crc.stroke(sand);
        //Gravel
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * task12.canvas.width;
            let y = ((Math.random() * 600) + 500);
            let gravel = new Path2D();
            gravel.rect(x, y, 7, 7);
            task12.crc.fillStyle = "grey";
            task12.crc.fill(gravel);
            task12.crc.stroke(gravel);
        }
        //Stone
        let stone = new Path2D();
        let stone2 = new Path2D();
        stone.moveTo(300, 550);
        stone.quadraticCurveTo(100, 200, 50, 550);
        stone.closePath();
        task12.crc.fillStyle = "grey";
        task12.crc.fill(stone);
        task12.crc.stroke(stone);
        stone2.moveTo(200, 550);
        stone2.quadraticCurveTo(250, 350, 450, 550);
        stone2.closePath();
        task12.crc.fillStyle = "Dimgray";
        task12.crc.fill(stone2);
        task12.crc.stroke(stone2);
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
        task12.crc.fillStyle = "green";
        task12.crc.fill(alga);
        task12.crc.stroke(alga);
    }
})(task12 || (task12 = {}));
//# sourceMappingURL=canvas.js.map