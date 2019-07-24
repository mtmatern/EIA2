var endabgabe;
(function (endabgabe) {
    class Snack extends endabgabe.SeaworldThings {
        constructor(_xMousePos, _yMousePos) {
            super();
            this.radius = 3;
            this.dx = 0;
            this.dy = 5;
        }
        draw() {
            endabgabe.crc.beginPath();
            endabgabe.crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "brown";
            endabgabe.crc.fill();
            //crc.closePath();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 600;
            }
        }
    }
    endabgabe.Snack = Snack;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Snack.js.map