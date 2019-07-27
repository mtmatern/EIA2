namespace endabgabe {
    export class GamingFish{   

        x: number;
        y: number;
        dx: number;
        dy: number;
        colorHead: string;

        

        radiusHeadX: number;
        radiusHeadY: number;
        radiusEye: number;
        radiusIris: number;
        startTailX: number;
        startTailY: number;
        sizeTail1: number;
        sizeTail2: number;
        sizeTail3: number;
        sizeTail4: number;
        

        //headRadiusX: number;

        hitboxRadiusX: number;
        hitboxRadiusY: number;

        //hitboxSize: number;


        constructor(){
            this.x = canvas.width/2;
            this.y = canvas.height/2;
            this.dx = 0;
            this.dy = 0;
            this.colorHead = "Red";
            


            this.radiusHeadX = 10;
            this.radiusHeadY = 20;
            
            this.radiusEye = 3;
            
            this.radiusIris = 1;

            this.startTailX = 20;
            this.startTailY = 2;
            this.sizeTail1 = this.radiusHeadX + 30;
            this.sizeTail2 = this.radiusHeadX + 36;
            this.sizeTail3 = 22;
            this.sizeTail4 = 10;

            
            this.hitboxRadiusX = 10;
            this.hitboxRadiusY = 20;

            /* if(this.hitboxRadiusX == 10 && this.hitboxRadiusY == 20){
                this.hitboxSize = 1;
            }
            else {
                this.hitboxSize = 2;
            } */
        }

        draw(): void {
            if(this.dx < 0) {
            let fishHead: Path2D = new Path2D();
            fishHead.ellipse(this.x, this.y, this.radiusHeadX, this.radiusHeadY, -1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
           /*  if(this.radiusHeadX >= fish1.radiusX && this.radiusHeadY < fish1.radiusY) {
                gamingFish.colorHead = ""
            } */
            crc.strokeStyle = "Black";
            crc.fillStyle = this.colorHead;
            crc.fill(fishHead);
            crc.stroke(fishHead);

            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x - 10, this.y - 2, this.radiusEye, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(fishEye);
            crc.stroke(fishEye);

            let fishEyeIris: Path2D = new Path2D();
            fishEyeIris.arc(this.x - 10, this.y - 2, this.radiusIris, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fishEyeIris);
            crc.stroke(fishEyeIris);

            let fishTail: Path2D = new Path2D();
            fishTail.moveTo(this.x + this.startTailX, this.y - this.startTailY);
            fishTail.lineTo(this.x + this.sizeTail1, this.y + this.sizeTail3);
            fishTail.lineTo(this.x + this.sizeTail2, this.y - this.sizeTail4);
            fishTail.closePath();
            crc.stroke(fishTail);
            crc.fillStyle = "Gold";
            crc.fill(fishTail);
            crc.stroke(fishTail);

            let hitBox: Path2D = new Path2D();
            hitBox.ellipse(this.x, this.y, this.hitboxRadiusX, this.hitboxRadiusY, -1.5, 0, 2 * Math.PI);
            //crc.strokeStyle = "#8494FF61";
            crc.strokeStyle = "rgba (255, 255, 255, 0.0)";
            crc.stroke(hitBox);
            }
            if(this.dx >= 0) {
                let fishHead: Path2D = new Path2D();
                fishHead.ellipse(this.x, this.y, this.radiusHeadX, this.radiusHeadY, 1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
                crc.strokeStyle = "Black";
                crc.fillStyle = "Red";
                crc.fill(fishHead);
                crc.stroke(fishHead);
    
                let fishEye: Path2D = new Path2D();
                fishEye.arc(this.x + 10, this.y - 2, this.radiusEye, 0, 2 * Math.PI);
                crc.fillStyle = "white";
                crc.fill(fishEye);
                crc.stroke(fishEye);
    
                let fishEyeIris: Path2D = new Path2D();
                fishEyeIris.arc(this.x + 10, this.y - 2, this.radiusIris, 0, 2 * Math.PI);
                crc.fillStyle = "black";
                crc.fill(fishEyeIris);
                crc.stroke(fishEyeIris);
    
                let fishTail: Path2D = new Path2D();
                fishTail.moveTo(this.x - this.startTailX, this.y + this.startTailY);
                fishTail.lineTo(this.x - this.sizeTail1, this.y + this.sizeTail3);
                fishTail.lineTo(this.x - this.sizeTail2, this.y - this.sizeTail4);
                fishTail.closePath();
                crc.stroke(fishTail);
                crc.fillStyle = "Gold";
                crc.fill(fishTail);
                crc.stroke(fishTail);

                let hitBox: Path2D = new Path2D();
                hitBox.ellipse(this.x, this.y, this.hitboxRadiusX, this.hitboxRadiusY, 1.5, 0, 2 * Math.PI);
                //crc.strokeStyle = "#8494FF61";
                crc.strokeStyle = "rgba (255, 255, 255, 0.0)";
                crc.stroke(hitBox);
            }
            
             
        }

        update(): void {
            this.move();
            this.draw();         
        }

        
        move(): void {
            /* switch(_direction) {
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
            } */
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