var task12;
(function (task12) {
    class Snack extends task12.SeaworldThings {
        constructor(_xMousePos, _yMousePos) {
            super();
            this.radius = 3;
            this.dx = 0;
            this.dy = 5;
        }
        draw() {
            task12.crc.beginPath();
            task12.crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            task12.crc.fillStyle = "brown";
            task12.crc.fill();
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
    task12.Snack = Snack;
})(task12 || (task12 = {}));
//# sourceMappingURL=Snack.js.map