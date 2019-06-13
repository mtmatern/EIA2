var task11;
(function (task11) {
    class Fish1 {
        draw() {
            let fishHead = new Path2D();
            fishHead.ellipse(this.x, this.y, 20, 40, 1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            task11.crc.fillStyle = "DarkSlateGrey";
            task11.crc.fill(fishHead);
            task11.crc.stroke(fishHead);
            let fishEye = new Path2D();
            fishEye.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            task11.crc.fillStyle = "white";
            task11.crc.fill(fishEye);
            task11.crc.stroke(fishEye);
            let fishEyeIris = new Path2D();
            fishEyeIris.arc(this.x + 20, this.y - 2, 2, 0, 2 * Math.PI);
            task11.crc.fillStyle = "black";
            task11.crc.fill(fishEyeIris);
            task11.crc.stroke(fishEyeIris);
            let fishTail = new Path2D();
            fishTail.moveTo(this.x - 40, this.y + 2);
            fishTail.lineTo(this.x - 60, this.y + 22);
            fishTail.lineTo(this.x - 66, this.y - 10);
            fishTail.closePath();
            task11.crc.stroke(fishTail);
            task11.crc.fillStyle = "Gold";
            task11.crc.fill(fishTail);
            task11.crc.stroke(fishTail);
        }
        update() {
            this.move();
            this.draw();
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
    task11.Fish1 = Fish1;
})(task11 || (task11 = {}));
//# sourceMappingURL=Fish1.js.map