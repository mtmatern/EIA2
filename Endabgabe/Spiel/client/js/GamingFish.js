var endabgabe;
(function (endabgabe) {
    class GamingFish {
        //hitboxSize: number;
        constructor() {
            this.x = endabgabe.canvas.width / 2;
            this.y = endabgabe.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
            this.colorHead = "Red";
            this.radiusHeadX = 13;
            this.radiusHeadY = 20;
            this.radiusEye = 5;
            this.radiusIris = 2;
            this.startTailX = 20;
            this.startTailY = 2;
            this.sizeTail1 = this.radiusHeadX + 30;
            this.sizeTail2 = this.radiusHeadX + 36;
            this.sizeTail3 = 22;
            this.sizeTail4 = 10;
            this.hitboxRadiusX = this.radiusHeadX;
            this.hitboxRadiusY = this.radiusHeadY;
            /* if(this.hitboxRadiusX == 10 && this.hitboxRadiusY == 20){
                this.hitboxSize = 1;
            }
            else {
                this.hitboxSize = 2;
            } */
        }
        draw() {
            if (this.dx < 0) {
                let fishHead = new Path2D();
                fishHead.ellipse(this.x, this.y, this.radiusHeadX, this.radiusHeadY, -1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
                /*  if(this.radiusHeadX >= fish1.radiusX && this.radiusHeadY < fish1.radiusY) {
                     gamingFish.colorHead = ""
                 } */
                endabgabe.crc.strokeStyle = "Black";
                endabgabe.crc.fillStyle = this.colorHead;
                endabgabe.crc.fill(fishHead);
                endabgabe.crc.stroke(fishHead);
                let fishEye = new Path2D();
                fishEye.arc(this.x - 10, this.y - 2, this.radiusEye, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "white";
                endabgabe.crc.fill(fishEye);
                endabgabe.crc.stroke(fishEye);
                let fishEyeIris = new Path2D();
                fishEyeIris.arc(this.x - 10, this.y - 2, this.radiusIris, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "black";
                endabgabe.crc.fill(fishEyeIris);
                endabgabe.crc.stroke(fishEyeIris);
                let fishTail = new Path2D();
                fishTail.moveTo(this.x + this.startTailX, this.y - this.startTailY);
                fishTail.lineTo(this.x + this.sizeTail1, this.y + this.sizeTail3);
                fishTail.lineTo(this.x + this.sizeTail2, this.y - this.sizeTail4);
                fishTail.closePath();
                endabgabe.crc.stroke(fishTail);
                endabgabe.crc.fillStyle = "Gold";
                endabgabe.crc.fill(fishTail);
                endabgabe.crc.stroke(fishTail);
                let hitBox = new Path2D();
                hitBox.ellipse(this.x, this.y, this.hitboxRadiusX, this.hitboxRadiusY, -1.5, 0, 2 * Math.PI);
                //crc.strokeStyle = "#8494FF61";
                endabgabe.crc.strokeStyle = "rgba (255, 255, 255, 0.0)";
                endabgabe.crc.stroke(hitBox);
            }
            if (this.dx >= 0) {
                let fishHead = new Path2D();
                fishHead.ellipse(this.x, this.y, this.radiusHeadX, this.radiusHeadY, 1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
                endabgabe.crc.strokeStyle = "Black";
                endabgabe.crc.fillStyle = "Red";
                endabgabe.crc.fill(fishHead);
                endabgabe.crc.stroke(fishHead);
                let fishEye = new Path2D();
                fishEye.arc(this.x + 10, this.y - 2, this.radiusEye, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "white";
                endabgabe.crc.fill(fishEye);
                endabgabe.crc.stroke(fishEye);
                let fishEyeIris = new Path2D();
                fishEyeIris.arc(this.x + 10, this.y - 2, this.radiusIris, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "black";
                endabgabe.crc.fill(fishEyeIris);
                endabgabe.crc.stroke(fishEyeIris);
                let fishTail = new Path2D();
                fishTail.moveTo(this.x - this.startTailX, this.y + this.startTailY);
                fishTail.lineTo(this.x - this.sizeTail1, this.y + this.sizeTail3);
                fishTail.lineTo(this.x - this.sizeTail2, this.y - this.sizeTail4);
                fishTail.closePath();
                endabgabe.crc.stroke(fishTail);
                endabgabe.crc.fillStyle = "Gold";
                endabgabe.crc.fill(fishTail);
                endabgabe.crc.stroke(fishTail);
                let hitBox = new Path2D();
                hitBox.ellipse(this.x, this.y, this.hitboxRadiusX, this.hitboxRadiusY, 1.5, 0, 2 * Math.PI);
                //crc.strokeStyle = "rgba (255, 255, 255, 0.0)";
                endabgabe.crc.strokeStyle = "black";
                endabgabe.crc.stroke(hitBox);
            }
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
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
            if (this.x + 80 < 0) {
                this.x = 1080;
            }
            if (this.x - 80 > 1000) {
                this.x = -80;
            }
            if (this.y - 80 > 600) {
                this.y = -80;
            }
            if (this.y + 80 < 0) {
                this.y = 680;
            }
        }
    }
    endabgabe.GamingFish = GamingFish;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=GamingFish.js.map