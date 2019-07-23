var endabgabe;
(function (endabgabe) {
    class Bubble extends endabgabe.SeaworldThings {
        constructor() {
            super();
            this.x = Math.random() * endabgabe.canvas.width;
            this.y = Math.random() * endabgabe.canvas.height;
            this.dy = Math.random() * -1 - 1;
            this.radius = 7;
            this.radius2 = 4;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "darkblue";
            endabgabe.crc.strokeStyle = "Black";
            endabgabe.crc.fill(bubble);
            endabgabe.crc.stroke(bubble);
            let bubble2 = new Path2D();
            bubble2.arc(this.x - 50, this.y - 50, this.radius2, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "darkblue";
            endabgabe.crc.fill(bubble2);
            endabgabe.crc.stroke(bubble2);
            super.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
    endabgabe.Bubble = Bubble;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Bubble.js.map