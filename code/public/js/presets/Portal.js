import {Model} from "./Model.js";

export class Portal extends Model{

    theta = []
    dir = []
    r = []
    rdir = []
    c = []

    constructor(quantity){
        super(quantity);
    }

    reset(){
        this.resetCanvas();
        strokeWeight(0.1)
        for (let i = 0; i < this.quantity; i++) {
            this.theta.push(random(0, 3 * PI))
            this.dir.push(1)
            this.r.push(random(30, 380))
            this.rdir.push(1)
            this.c.push(createVector(900, 475))
        }
    }

    setDrawFn(){
        window.draw = () => {
            fill(0, 0, 0, 5)
            noStroke();
            rect(0, 0, width, height)
            for (let i = 0; i < this.quantity; i++) {
                stroke('purple');
                this.theta[i] = this.theta[i] + PI / 100 * this.dir[i]
                this.rdir[i] = this.checkr(this.rdir[i], this.r[i])
                this.r[i] = this.r[i] + this.rdir[i]
                let x = this.c[i].x + this.r[i] * cos(this.theta[i])
                let y = this.c[i].y + this.r[i] * sin(this.theta[i])
                point(x, y)
            }
        }
    }

    checkr(rdir, r) {
        if (rdir==1 && r > 380) {
            rdir = -1
        }
        if (rdir==-1 && r < 0) {
            rdir = 1
        }
        return rdir
    }
}
