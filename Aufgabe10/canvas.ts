namespace task10{
    document.addEventListener("DOMContentLoaded", init);
    let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    

    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        
        drawWater();
        drawSand();
        for (let i: number = 0; i < 200; i++) {
			let x: number = Math.random() * canvas.width;
            let y: number = ((Math.random() * 600) + 500);
            drawGravel(x, y);
        }
        
        drawStone();      
        drawAlga();  
        for (let i: number = 0; i < 10; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
            
        drawBubbles(x, y);
        }
        for (let i: number = 0; i < 15; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
            
        drawBubbles2(x, y);
        }
        for (let i: number = 0; i < 9; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
            
        drawFish1(x, y);
        }
        for (let i: number = 0; i < 4; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
            
        drawFish2(x, y);
        }


    }

    function drawWater(): void {
       /*  let water: Path2D = new Path2D();
        water.moveTo(0, 500);
        water.lineTo(1000, 500);
        water.lineTo(1000, 0);
        water.lineTo(0, 0);
        water.lineTo(0, 500);

        crc.fillStyle = "blue";
        crc.fill(water);
        crc.stroke(water); */

        let water: CanvasGradient = crc.createLinearGradient(0, 10, 0, 300);
        water.addColorStop(0, "lightblue");
		water.addColorStop(1, "blue");
		crc.fillStyle = water;
		crc.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    function drawSand(): void {
        let sand: Path2D = new Path2D();
        sand.moveTo(0, 500);
        sand.lineTo(1000, 500);
        sand.lineTo(1000, 600);
        sand.lineTo(0, 600);
        sand.lineTo(0, 500);

        crc.fillStyle = "BurlyWood";
		crc.fill(sand);
        crc.stroke(sand);
    }

    function drawGravel(_x: number, _y: number): void {
        let gravel: Path2D = new Path2D();
		gravel.rect(_x, _y, 7, 7);
		crc.fillStyle = "grey";
		crc.fill(gravel);
		crc.stroke(gravel);
    }

    function drawStone(): void {
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
    }

    function drawAlga(): void {
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

    function drawFish1(_x: number, _y: number): void {
        let fishHead: Path2D = new Path2D();
        fishHead.ellipse(_x, _y, 20, 40 , 1.5, 0, 2 * Math.PI);
        //fishHead.ellipse()
        crc.fillStyle = "DarkSlateGrey";
        crc.fill(fishHead);
        crc.stroke(fishHead);
        
        let fishEye: Path2D = new Path2D();
		fishEye.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(fishEye);
		crc.stroke(fishEye);

		let fishEyeIris: Path2D = new Path2D();
		fishEyeIris.arc(_x + 20 , _y - 2, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(fishEyeIris);
        crc.stroke(fishEyeIris);
        
        let fishTail: Path2D = new Path2D();
		fishTail.moveTo(_x - 40, _y + 2);
		fishTail.lineTo(_x - 60, _y + 22);
        fishTail.lineTo(_x - 66, _y - 10);
		fishTail.closePath();
		crc.stroke(fishTail);
		crc.fillStyle = "Gold";
		crc.fill(fishTail);
		crc.stroke(fishTail);
    }

    function drawFish2(_x: number, _y: number): void {
        let fishHead: Path2D = new Path2D();
        fishHead.ellipse(_x, _y, 20, 40 , -1.5, 0, 2 * Math.PI);
        //fishHead.ellipse()
        crc.fillStyle = "IndianRed";
        crc.fill(fishHead);
        crc.stroke(fishHead);
        
        let fishEye: Path2D = new Path2D();
		fishEye.arc(_x - 20, _y - 2, 5, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(fishEye);
		crc.stroke(fishEye);

		let fishEyeIris: Path2D = new Path2D();
		fishEyeIris.arc(_x - 20 , _y - 2, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(fishEyeIris);
        crc.stroke(fishEyeIris);
        
        let fishTail: Path2D = new Path2D();
		fishTail.moveTo(_x + 40, _y + 2);
		fishTail.lineTo(_x + 60, _y + 22);
        fishTail.lineTo(_x + 66, _y - 10);
		fishTail.closePath();
		crc.stroke(fishTail);
		crc.fillStyle = "Teal";
		crc.fill(fishTail);
		crc.stroke(fishTail);
    }

	function drawBubbles(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc(_x, _y, 7, 0, 2 * Math.PI);
		crc.fillStyle = "darkblue";
		crc.fill(bubble);
		crc.stroke(bubble);
    }
    
    function drawBubbles2(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc(_x, _y, 4, 0, 2 * Math.PI);
		crc.fillStyle = "darkblue";
		crc.fill(bubble);
		crc.stroke(bubble);
    }
   
}
