namespace task11 {
    export class Bubble2 {
        x: number;
        y: number;

        dy: number;


        draw(): void {
            let bubble2: Path2D = new Path2D();
            bubble2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            crc.fillStyle = "darkblue";
            crc.fill(bubble2);
            crc.stroke(bubble2);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
}