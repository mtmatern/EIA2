namespace task11 {
    export class Bubble {
        x: number;
        y: number;

        dy: number;


        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            crc.fillStyle = "darkblue";
            crc.fill(bubble);
            crc.stroke(bubble);
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