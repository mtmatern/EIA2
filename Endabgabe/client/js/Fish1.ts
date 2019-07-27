namespace endabgabe {
    export class Fish1 extends SeaworldThings {

        radiusX: number;
        radiusY: number;
        //scale: number;
        //a: number;
        hitboxRadius: number;
        hitboxRadiusY: number;

        constructor(){
            super();
            this.x = (Math.floor(Math.random() * canvas.width) + canvas.width/2); //Math.floor(Math.random() * 6) + 1  
            this.y = Math.random() * canvas.height - 100;
            this.dx = Math.random() * 2 + 1;
            this.dy = Math.random() * 2 - 1;
            //this.a = Math.random() * 2 + 1;
            //this.scale = Math.random() * 2 + 1;
            

            this.radiusX = Math.random() * 70 + 20;
            this.radiusY = Math.random() * 70 + 40;
            
            this.hitboxRadius = this.radiusX;
            this.hitboxRadiusY = this.radiusY;
            this.color = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        }

        draw(): void {
            let fishHead: Path2D = new Path2D();
            fishHead.ellipse(this.x, this.y, this.radiusX, this.radiusY, 1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            crc.fillStyle = "DarkSlateGrey";
            //crc.fillStyle = this.color
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
            //crc.fillStyle = "Gold";
            crc.fillStyle = this.color;
            crc.fill(fishTail);
            crc.stroke(fishTail);

            let hitBox: Path2D = new Path2D();
            //hitBox.arc(this.x, this.y, this.hitboxRadius, 0, 2 * Math.PI);
            hitBox.ellipse(this.x, this.y, this.hitboxRadius, this.hitboxRadiusY, 1.5, 0, 2 * Math.PI);
            //crc.strokeStyle = "#8494FF61";
            crc.strokeStyle = "rgba (255, 255, 255, 0.0)";
            crc.stroke(hitBox);

            


            super.draw();
        }

       /*  update(_s:number): void {
            this.scale(_s);
        } */


        move(): void {
            
            this.x += this.dx;
            this.y += this.dy;
            if(this.x + 100 < 0) {
                this.x = 1100; 
            }
            if(this.x - 100 > 1000) {
                this.x = - 80; 
            }
            if(this.y - 100 > 600) {
                this.y = - 100;
            }
            if(this.y + 100 < 0) {
                this.y = 700;
            }
            /* this.x += this.dx;
            this.y += this.dy;
            if(this.x + this.radiusX < 0) {
                this.x = 1000 + this.radiusX; 
            }
            if(this.x - this.radiusX > 1000) {
                this.x = - this.radiusX; 
            }
            if(this.y - this.radiusX > 600) {
                this.y = - this.radiusX;
            }
            if(this.y + this.radiusX < 0) {
                this.y = 600 + this.radiusX;
            } */
        }

       /*  scale(_s:number):void{
            this.a = this.a*_s;
        } */
    }
}