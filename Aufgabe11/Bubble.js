var task11;
(function (task11) {
    class Bubble {
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            task11.crc.fillStyle = "darkblue";
            task11.crc.fill(bubble);
            task11.crc.stroke(bubble);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
    task11.Bubble = Bubble;
})(task11 || (task11 = {}));
//# sourceMappingURL=Bubble.js.map