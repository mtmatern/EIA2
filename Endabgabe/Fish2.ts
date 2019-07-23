namespace endabgabe {
    export class Fish2 extends SeaworldThings {

        radiusX: number;
        radiusY: number;

        constructor(){
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 1 - 2;
            this.dy = Math.random() * 2 - 1;
            this.radiusX = Math.random() * 20 + 5;
            this.radiusY = Math.random() * 20 + 10;
        }
   
        draw(): void {
            let fishHead: Path2D = new Path2D();
            fishHead.ellipse(this.x, this.y, this.radiusX, this.radiusY, -1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            crc.fillStyle = "IndianRed";
            crc.fill(fishHead);
            crc.stroke(fishHead);

            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x - 3, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye);
            crc.stroke(fishEye);

            let fishEyeIris: Path2D = new Path2D();
            fishEyeIris.arc(this.x - 3, this.y - 2, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeIris);
            crc.stroke(fishEyeIris);

            let fishTail: Path2D = new Path2D();
            /* fishTail.moveTo(this.x + 40, this.y + 2);
            fishTail.lineTo(this.x + 60, this.y + 22);
            fishTail.lineTo(this.x + 66, this.y - 10); */
            fishTail.moveTo(this.x + this.radiusY, this.y + 2);
            fishTail.lineTo(this.x + this.radiusY + 30, this.y - this.radiusX);
            fishTail.lineTo(this.x + this.radiusY + 32, this.y + this.radiusX);
            fishTail.closePath();
            crc.stroke(fishTail);
            crc.fillStyle = "Teal";
            crc.fill(fishTail);
            crc.stroke(fishTail);

            super.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if(this.x + 80 < 0) {
                this.x = 1080; 
            }
            if(this.x - 80 > 1000) {
                this.x = - 80; 
            }
            if(this.y - 80 > 600) {
                this.y = - 80;
            }
            if(this.y + 80 < 0) {
                this.y = 680;
            }
        }
    }
}