export class Model{

    positionX = screen.width/2;
    positionY = screen.width/4.1;
    theta = []
    dir = []
    rdir = []
    r = []
    c = []

    constructor(quantity = 200, dotColor = '#3c0d82'){
        this.quantity = quantity;
        this.dotColor = dotColor;
        this.setSetupFn();
        this.setDrawFn();
    }

    resetCanvas(){
        createCanvas(screen.width, screen.width)
        background(0)
    }

    reset(){}

    setSetupFn(){
        window.setup = () => {
            this.reset();
        }
    }

    setDrawFn(){}

    setQuantity(quantity){
        this.quantity = quantity;
    }

    getQuantity(){
        return this.quantity;
    }

    setDotColor(dotColor){
        this.dotColor = dotColor;
    }

    getDotColor(){
        return this.dotColor;
    }
}