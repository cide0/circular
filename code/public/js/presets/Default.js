import {Model} from "./Model.js";

export class Default extends Model{

    constructor(quantity){
        super(quantity);
    }

    reset(){
        this.resetCanvas()
        strokeWeight(3)
        for (let i = 0; i < this.quantity; i++) {
            this.theta.push(random(0, 2 * PI))
            this.dir.push([-1, 1][round(random(1))])
            this.r.push(random(1, 475))
            this.c.push(createVector(this.positionX, this.positionY))
        }
    }

    setDrawFn(){
        window.draw = () => {
            fill(0, 0, 0, 5)
            noStroke();
            rect(0, 0, width, height)
            for (let i = 0; i < this.quantity; i++) {
                stroke('purple')
                this.theta[i] = this.theta[i] + PI / 100 * this.dir[i]
                let x = this.c[i].x + this.r[i] * cos(this.theta[i])
                let y = this.c[i].y + this.r[i] * sin(this.theta[i])
                point(x, y)
            }
        }
    }
}