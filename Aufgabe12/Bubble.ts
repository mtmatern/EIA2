namespace task12 {
    export class Bubble extends SeaworldThings {

        radius: number;
        radius2: number;

        constructor(){
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dy = Math.random() * -1 - 1;
            this.radius = 7;
            this.radius2 = 4;
        }

        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc.fillStyle = "darkblue";
            crc.fill(bubble);
            crc.stroke(bubble);

            let bubble2: Path2D = new Path2D();
            bubble2.arc(this.x -50, this.y -50, this.radius2, 0, 2 * Math.PI);
            crc.fillStyle = "darkblue";
            crc.fill(bubble2);
            crc.stroke(bubble2);

            super.draw();
        }

        move(): void {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
}