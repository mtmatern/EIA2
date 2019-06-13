var task11;
(function (task11) {
    class Bubble2 {
        draw() {
            let bubble2 = new Path2D();
            bubble2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            task11.crc.fillStyle = "darkblue";
            task11.crc.fill(bubble2);
            task11.crc.stroke(bubble2);
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
    task11.Bubble2 = Bubble2;
})(task11 || (task11 = {}));
//# sourceMappingURL=Bubble2.js.map