var task11;
(function (task11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fish1Array = [];
    let fish2Array = [];
    let bubbleArray = [];
    let bubble2Array = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        task11.crc = canvas.getContext("2d");
        drawBackground();
        imageData = task11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 2 + 1;
            let dy = Math.random() * 2 - 1;
            let fish1;
            fish1 = new task11.Fish1();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            fish1Array.push(fish1);
            fish1.draw();
        }
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 1 - 2;
            let dy = Math.random() * 2 - 1;
            let fish2;
            fish2 = new task11.Fish2();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2.dy = dy;
            fish2Array.push(fish2);
            fish2.draw();
        }
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -1 - 1;
            let bubble;
            bubble = new task11.Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            bubble.draw();
        }
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -1 - 1;
            let bubble2;
            bubble2 = new task11.Bubble2();
            bubble2.x = x;
            bubble2.y = y;
            bubble2.dy = dy;
            bubble2Array.push(bubble2);
            bubble2.draw();
        }
        update();
    }
    function drawBackground() {
        //Water
        let water = task11.crc.createLinearGradient(0, 10, 0, 300);
        water.addColorStop(0, "lightblue");
        water.addColorStop(1, "blue");
        task11.crc.fillStyle = water;
        task11.crc.fillRect(0, 0, canvas.width, canvas.height);
        //Sand
        let sand = new Path2D();
        sand.moveTo(0, 500);
        sand.lineTo(1000, 500);
        sand.lineTo(1000, 600);
        sand.lineTo(0, 600);
        sand.lineTo(0, 500);
        task11.crc.fillStyle = "BurlyWood";
        task11.crc.fill(sand);
        task11.crc.stroke(sand);
        //Gravel
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * canvas.width;
            let y = ((Math.random() * 600) + 500);
            let gravel = new Path2D();
            gravel.rect(x, y, 7, 7);
            task11.crc.fillStyle = "grey";
            task11.crc.fill(gravel);
            task11.crc.stroke(gravel);
        }
        //Stone
        let stone = new Path2D();
        let stone2 = new Path2D();
        stone.moveTo(300, 550);
        stone.quadraticCurveTo(100, 200, 50, 550);
        stone.closePath();
        task11.crc.fillStyle = "grey";
        task11.crc.fill(stone);
        task11.crc.stroke(stone);
        stone2.moveTo(200, 550);
        stone2.quadraticCurveTo(250, 350, 450, 550);
        stone2.closePath();
        task11.crc.fillStyle = "Dimgray";
        task11.crc.fill(stone2);
        task11.crc.stroke(stone2);
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
        task11.crc.fillStyle = "green";
        task11.crc.fill(alga);
        task11.crc.stroke(alga);
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        task11.crc.clearRect(0, 0, canvas.width, canvas.height);
        task11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fish1Array.length; i++) {
            fish1Array[i].update();
        }
        for (let i = 0; i < fish2Array.length; i++) {
            fish2Array[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < bubble2Array.length; i++) {
            bubble2Array[i].update();
        }
    }
})(task11 || (task11 = {}));
//# sourceMappingURL=canvas.js.map