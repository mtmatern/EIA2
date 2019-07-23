namespace endabgabe {
    export class Fish1 extends SeaworldThings {

        radiusX: number;
        radiusY: number;
        //scale: number;
        //a: number;

        constructor(){
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 2 + 1;
            this.dy = Math.random() * 2 - 1;
            //this.a = Math.random() * 2 + 1;
            //this.scale = Math.random() * 2 + 1;

            this.radiusX = Math.random() * 40 + 20;
            this.radiusY = Math.random() * 60 + 40;
        }

        draw(): void {
            let fishHead: Path2D = new Path2D();
            fishHead.ellipse(this.x, this.y, this.radiusX, this.radiusY, 1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            crc.fillStyle = "DarkSlateGrey";
            crc.strokeStyle = "Black";
            //crc.scale(0.5, 0.5);
            crc.fill(fishHead);
            crc.stroke(fishHead);

            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye);
            crc.stroke(fishEye);

            let fishEyeIris: Path2D = new Path2D();
            fishEyeIris.arc(this.x + 20, this.y - 2, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeIris);
            crc.stroke(fishEyeIris);

            let fishTail: Path2D = new Path2D();
            fishTail.moveTo(this.x - this.radiusY, this.y + 4);
            fishTail.lineTo(this.x - this.radiusY - 30, this.y + this.radiusX);
            fishTail.lineTo(this.x - this.radiusY - 32, this.y - this.radiusX);
            fishTail.closePath();
            crc.stroke(fishTail);
            crc.fillStyle = "Gold";
            crc.fill(fishTail);
            crc.stroke(fishTail);

            let hitBox: Path2D = new Path2D();
            hitBox.arc(this.x, this.y, 20, 1.5, 0);
            //crc.strokeStyle = "#8494FF61";
            crc.strokeStyle = "yellow";
            crc.stroke(hitBox);


            super.draw();
        }

       /*  update(_s:number): void {
            this.scale(_s);
        } */


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

       /*  scale(_s:number):void{
            this.a = this.a*_s;
        } */
    }
}