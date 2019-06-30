var task12;
(function (task12) {
    class Bubble extends task12.SeaworldThings {
        constructor() {
            super();
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dy = Math.random() * -1 - 1;
            this.radius = 7;
            this.radius2 = 4;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            task12.crc.fillStyle = "darkblue";
            task12.crc.fill(bubble);
            task12.crc.stroke(bubble);
            let bubble2 = new Path2D();
            bubble2.arc(this.x - 50, this.y - 50, this.radius2, 0, 2 * Math.PI);
            task12.crc.fillStyle = "darkblue";
            task12.crc.fill(bubble2);
            task12.crc.stroke(bubble2);
            super.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
    task12.Bubble = Bubble;
})(task12 || (task12 = {}));
//# sourceMappingURL=Bubble.js.map