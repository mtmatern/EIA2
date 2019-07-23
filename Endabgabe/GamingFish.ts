namespace endabgabe {
    export class GamingFish{   

        x: number;
        y: number;
        dx: number;
        dy: number;


        constructor(){
            this.x = canvas.width/2;
            this.y = canvas.height/2;
            this.dx = 0;
            this.dy = 30;
        }

        draw(): void {
            if(this.dx < 0) {
            let fishHead: Path2D = new Path2D();
            fishHead.ellipse(this.x, this.y, 20, 40, -1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            crc.fillStyle = "Red";
            crc.fill(fishHead);
            crc.stroke(fishHead);

            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye);
            crc.stroke(fishEye);

            let fishEyeIris: Path2D = new Path2D();
            fishEyeIris.arc(this.x - 20, this.y - 2, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeIris);
            crc.stroke(fishEyeIris);

            let fishTail: Path2D = new Path2D();
            fishTail.moveTo(this.x + 40, this.y - 2);
            fishTail.lineTo(this.x + 60, this.y + 22);
            fishTail.lineTo(this.x + 66, this.y - 10);
            fishTail.closePath();
            crc.stroke(fishTail);
            crc.fillStyle = "Gold";
            crc.fill(fishTail);
            crc.stroke(fishTail);
            }
            if(this.dx >= 0) {
                let fishHead: Path2D = new Path2D();
                fishHead.ellipse(this.x, this.y, 20, 40, 1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
                crc.fillStyle = "Red";
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
                fishTail.moveTo(this.x - 40, this.y + 2);
                fishTail.lineTo(this.x - 60, this.y + 22);
                fishTail.lineTo(this.x - 66, this.y - 10);
                fishTail.closePath();
                crc.stroke(fishTail);
                crc.fillStyle = "Gold";
                crc.fill(fishTail);
                crc.stroke(fishTail);
            }
            let hitBox: Path2D = new Path2D();
            hitBox.arc(this.x, this.y, 20, 1.5, 0);
            //crc.strokeStyle = "#8494FF61";
            crc.strokeStyle = "yellow";
            crc.stroke(hitBox);
             
        }

        update(): void {
            this.draw();
        }

        //bewegt noch nichts
        move(_direction: string): void {
            switch(_direction) {
                case "left": {
                    this.dx = -30;
                    this.x += this.dx;
                    break;
                }
                case "right": {
                    this.dx = 30;
                    this.x += this.dx;
                    break;
                }
                case "up": {
                    this.y -= this.dy;
                    break;
                }
                case "down": {
                    this.y += this.dy;
                    break;
                }
            }
            
        }

        /*  */
 
        /* move(): void{

        }; */

    
    }
}