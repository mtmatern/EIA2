var endabgabe;
(function (endabgabe) {
    class GamingFish {
        constructor() {
            this.x = endabgabe.canvas.width / 2;
            this.y = endabgabe.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
            this.hitboxRadius = 20;
            this.headRadiusX = 20;
        }
        draw() {
            if (this.dx < 0) {
                let fishHead = new Path2D();
                fishHead.ellipse(this.x, this.y, this.headRadiusX, 40, -1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
                endabgabe.crc.strokeStyle = "Black";
                endabgabe.crc.fillStyle = "Red";
                endabgabe.crc.fill(fishHead);
                endabgabe.crc.stroke(fishHead);
                let fishEye = new Path2D();
                fishEye.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "white";
                endabgabe.crc.fill(fishEye);
                endabgabe.crc.stroke(fishEye);
                let fishEyeIris = new Path2D();
                fishEyeIris.arc(this.x - 20, this.y - 2, 2, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "black";
                endabgabe.crc.fill(fishEyeIris);
                endabgabe.crc.stroke(fishEyeIris);
                let fishTail = new Path2D();
                fishTail.moveTo(this.x + 40, this.y - 2);
                fishTail.lineTo(this.x + 60, this.y + 22);
                fishTail.lineTo(this.x + 66, this.y - 10);
                fishTail.closePath();
                endabgabe.crc.stroke(fishTail);
                endabgabe.crc.fillStyle = "Gold";
                endabgabe.crc.fill(fishTail);
                endabgabe.crc.stroke(fishTail);
                let hitBox = new Path2D();
                hitBox.ellipse(this.x, this.y, this.hitboxRadius, 40, -1.5, 0, 2 * Math.PI);
                //crc.strokeStyle = "#8494FF61";
                endabgabe.crc.strokeStyle = "yellow";
                endabgabe.crc.stroke(hitBox);
            }
            if (this.dx >= 0) {
                let fishHead = new Path2D();
                fishHead.ellipse(this.x, this.y, this.headRadiusX, 40, 1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
                endabgabe.crc.strokeStyle = "Black";
                endabgabe.crc.fillStyle = "Red";
                endabgabe.crc.fill(fishHead);
                endabgabe.crc.stroke(fishHead);
                let fishEye = new Path2D();
                fishEye.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "white";
                endabgabe.crc.fill(fishEye);
                endabgabe.crc.stroke(fishEye);
                let fishEyeIris = new Path2D();
                fishEyeIris.arc(this.x + 20, this.y - 2, 2, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "black";
                endabgabe.crc.fill(fishEyeIris);
                endabgabe.crc.stroke(fishEyeIris);
                let fishTail = new Path2D();
                fishTail.moveTo(this.x - 40, this.y + 2);
                fishTail.lineTo(this.x - 60, this.y + 22);
                fishTail.lineTo(this.x - 66, this.y - 10);
                fishTail.closePath();
                endabgabe.crc.stroke(fishTail);
                endabgabe.crc.fillStyle = "Gold";
                endabgabe.crc.fill(fishTail);
                endabgabe.crc.stroke(fishTail);
                let hitBox = new Path2D();
                hitBox.ellipse(this.x, this.y, this.hitboxRadius, 40, 1.5, 0, 2 * Math.PI);
                //crc.strokeStyle = "#8494FF61";
                endabgabe.crc.strokeStyle = "yellow";
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