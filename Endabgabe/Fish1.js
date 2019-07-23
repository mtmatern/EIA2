var endabgabe;
(function (endabgabe) {
    class Fish1 extends endabgabe.SeaworldThings {
        //scale: number;
        //a: number;
        constructor() {
            super();
            this.x = Math.random() * endabgabe.canvas.width;
            this.y = Math.random() * endabgabe.canvas.height;
            this.dx = Math.random() * 2 + 1;
            this.dy = Math.random() * 2 - 1;
            //this.a = Math.random() * 2 + 1;
            //this.scale = Math.random() * 2 + 1;
            this.radiusX = Math.random() * 40 + 20;
            this.radiusY = Math.random() * 60 + 40;
        }
        draw() {
            let fishHead = new Path2D();
            fishHead.ellipse(this.x, this.y, this.radiusX, this.radiusY, 1.5, 0, 2 * Math.PI);
            //fishHead.ellipse()
            endabgabe.crc.fillStyle = "DarkSlateGrey";
            endabgabe.crc.strokeStyle = "Black";
            //crc.scale(0.5, 0.5);
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
            fishTail.moveTo(this.x - this.radiusY, this.y + 4);
            fishTail.lineTo(this.x - this.radiusY - 30, this.y + this.radiusX);
            fishTail.lineTo(this.x - this.radiusY - 32, this.y - this.radiusX);
            fishTail.closePath();
            endabgabe.crc.stroke(fishTail);
            endabgabe.crc.fillStyle = "Gold";
            endabgabe.crc.fill(fishTail);
            endabgabe.crc.stroke(fishTail);
            let hitBox = new Path2D();
            hitBox.arc(this.x, this.y, 20, 1.5, 0);
            //crc.strokeStyle = "#8494FF61";
            endabgabe.crc.strokeStyle = "yellow";
            endabgabe.crc.stroke(hitBox);
            super.draw();
        }
        /*  update(_s:number): void {
             this.scale(_s);
         } */
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
    endabgabe.Fish1 = Fish1;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Fish1.js.map