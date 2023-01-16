export class Model{

    quantity = 200;
    positionX = screen.width/2;
    positionY = screen.width/4.1;
    theta = []
    dir = []
    rdir = []
    r = []
    c = []

    constructor(quantity = 200){
        this.quantity = quantity;
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
}