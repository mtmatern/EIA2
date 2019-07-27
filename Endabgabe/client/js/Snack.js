var endabgabe;
(function (endabgabe) {
    class Snack /* extends SeaworldThings */ {
        constructor(_xMousePos, _yMousePos) {
            //super();
            /*  this.x = 0;
             this.y = 0; */
            this.x = _xMousePos - 9;
            this.y = _yMousePos - 12;
            this.radius = 3;
            this.dx = 0;
            this.dy = 5;
            this.hitboxRadius = this.radius;
        }
        draw() {
            endabgabe.crc.beginPath();
            endabgabe.crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            endabgabe.crc.strokeStyle = "white";
            endabgabe.crc.fillStyle = "brown";
            endabgabe.crc.fill();
            //crc.closePath();
            let hitBox = new Path2D();
            hitBox.arc(this.x, this.y, this.hitboxRadius, 0, 2 * Math.PI);
            //hitBox.ellipse(this.x, this.y, this.hitboxRadius, this.hitboxRadiusY, 1.5, 0, 2 * Math.PI);
            //crc.strokeStyle = "#8494FF61";
            endabgabe.crc.strokeStyle = "rgba (255, 255, 255, 0.0)";
            endabgabe.crc.stroke(hitBox);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 600;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    endabgabe.Snack = Snack;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Snack.js.map