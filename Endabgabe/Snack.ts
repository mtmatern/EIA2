namespace endabgabe{
    export class Snack extends SeaworldThings{
        radius: number;

        constructor(_xMousePos: number, _yMousePos: number) {
            super();
            this.radius = 3;
            this.dx = 0;
            this.dy  = 5;
        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc.fillStyle = "brown";
            crc.fill();
            //crc.closePath();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 600) {
                this.y = 600;
            }
        }

        
    }
}