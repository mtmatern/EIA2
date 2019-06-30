var task12;
(function (task12) {
    class Fish1 extends task12.SeaworldThings {
        constructor() {
            super();
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dx = Math.random() * 2 + 1;
            this.dy = Math.random() * 2 - 1;
        }
        draw() {
            let fishHead = new Path2D();
            fishHead.ellipse(this.x, this.y, 20, 40, 1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            task12.crc.fillStyle = "DarkSlateGrey";
            task12.crc.fill(fishHead);
            task12.crc.stroke(fishHead);
            let fishEye = new Path2D();
            fishEye.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            task12.crc.fillStyle = "white";
            task12.crc.fill(fishEye);
            task12.crc.stroke(fishEye);
            let fishEyeIris = new Path2D();
            fishEyeIris.arc(this.x + 20, this.y - 2, 2, 0, 2 * Math.PI);
            task12.crc.fillStyle = "black";
            task12.crc.fill(fishEyeIris);
            task12.crc.stroke(fishEyeIris);
            let fishTail = new Path2D();
            fishTail.moveTo(this.x - 40, this.y + 2);
            fishTail.lineTo(this.x - 60, this.y + 22);
            fishTail.lineTo(this.x - 66, this.y - 10);
            fishTail.closePath();
            task12.crc.stroke(fishTail);
            task12.crc.fillStyle = "Gold";
            task12.crc.fill(fishTail);
            task12.crc.stroke(fishTail);
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
    task12.Fish1 = Fish1;
})(task12 || (task12 = {}));
//# sourceMappingURL=Fish1.js.map