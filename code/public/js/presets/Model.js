export class Model{

    quantity = 200;

    constructor(quantity = 200){
        this.quantity = quantity;
        this.setSetupFn();
        this.setDrawFn();
    }

    resetCanvas(){
        createCanvas(1800, 1800)
        background(0)
    }

    reset(){}

    setSetupFn(){
        window.setup = () => {
            this.reset();
        }
    }

    setDrawFn(){}
}