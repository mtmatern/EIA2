namespace endabgabe {
    export class Snack /* extends SeaworldThings */ {
        x: number;
        y: number;
        dx: number;
        dy: number;
        radius: number;
        hitboxRadius: number;
        time: number;

        constructor(_xMousePos: number, _yMousePos: number) {
            //super();
            /*  this.x = 0;
             this.y = 0; */
            this.x = _xMousePos - 9;
            this.y = _yMousePos - 12;
            this.radius = 3;
            this.dx = Math.random() * 1 - 1;
            this.dy = 5;

            this.time = window.setTimeout(deleteSnack, 5000);

            this.hitboxRadius = this.radius;
        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "brown";
            crc.fill();
            //crc.closePath();
            let hitBox: Path2D = new Path2D();
            hitBox.arc(this.x, this.y, this.hitboxRadius, 0, 2 * Math.PI);
            //hitBox.ellipse(this.x, this.y, this.hitboxRadius, this.hitboxRadiusY, 1.5, 0, 2 * Math.PI);
            //crc.strokeStyle = "#8494FF61";
            crc.strokeStyle = "rgba (255, 255, 255, 0.0)";
            crc.stroke(hitBox);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 600) {
                this.y = 600;
                this.dx = 0;
            }
        }

        update(): void {
            this.move();
            this.draw();

        }


    }
}