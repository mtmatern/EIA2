var endabgabe;
(function (endabgabe) {
    class GamingFish {
        constructor() {
            this.x = endabgabe.canvas.width / 2;
            this.y = endabgabe.canvas.height / 2;
            this.dx = 0;
            this.dy = 30;
        }
        draw() {
            if (this.dx < 0) {
                let fishHead = new Path2D();
                fishHead.ellipse(this.x, this.y, 20, 40, -1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
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
            }
            if (this.dx >= 0) {
                let fishHead = new Path2D();
                fishHead.ellipse(this.x, this.y, 20, 40, 1.5, 0, 2 * Math.PI);
                //fishHead.ellipse()
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
            }
            let hitBox = new Path2D();
            hitBox.arc(this.x, this.y, 20, 1.5, 0);
            //crc.strokeStyle = "#8494FF61";
            endabgabe.crc.strokeStyle = "yellow";
            endabgabe.crc.stroke(hitBox);
        }
        update() {
            this.draw();
        }
        //bewegt noch nichts
        move(_direction) {
            switch (_direction) {
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
    }
    endabgabe.GamingFish = GamingFish;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=GamingFish.js.map