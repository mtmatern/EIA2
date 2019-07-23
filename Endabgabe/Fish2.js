var endabgabe;
(function (endabgabe) {
    class Fish2 extends endabgabe.SeaworldThings {
        constructor() {
            super();
            this.x = Math.random() * endabgabe.canvas.width;
            this.y = Math.random() * endabgabe.canvas.height;
            this.dx = Math.random() * 1 - 2;
            this.dy = Math.random() * 2 - 1;
            this.radiusX = Math.random() * 20 + 5;
            this.radiusY = Math.random() * 20 + 10;
        }
        draw() {
            let fishHead = new Path2D();
            fishHead.ellipse(this.x, this.y, this.radiusX, this.radiusY, -1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            endabgabe.crc.fillStyle = "IndianRed";
            endabgabe.crc.fill(fishHead);
            endabgabe.crc.stroke(fishHead);
            let fishEye = new Path2D();
            fishEye.arc(this.x - 3, this.y - 2, 5, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "white";
            endabgabe.crc.fill(fishEye);
            endabgabe.crc.stroke(fishEye);
            let fishEyeIris = new Path2D();
            fishEyeIris.arc(this.x - 3, this.y - 2, 2, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.fill(fishEyeIris);
            endabgabe.crc.stroke(fishEyeIris);
            let fishTail = new Path2D();
            /* fishTail.moveTo(this.x + 40, this.y + 2);
            fishTail.lineTo(this.x + 60, this.y + 22);
            fishTail.lineTo(this.x + 66, this.y - 10); */
            fishTail.moveTo(this.x + this.radiusY, this.y + 2);
            fishTail.lineTo(this.x + this.radiusY + 30, this.y - this.radiusX);
            fishTail.lineTo(this.x + this.radiusY + 32, this.y + this.radiusX);
            fishTail.closePath();
            endabgabe.crc.stroke(fishTail);
            endabgabe.crc.fillStyle = "Teal";
            endabgabe.crc.fill(fishTail);
            endabgabe.crc.stroke(fishTail);
            super.draw();
        }
        move() {
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
    endabgabe.Fish2 = Fish2;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Fish2.js.map