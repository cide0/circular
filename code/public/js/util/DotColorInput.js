import {InputElement} from "./InputElement.js";

export class DotColorInput extends InputElement{
    constructor(presetSelect){
        super('dots-color-input', presetSelect);
        this.setValue(this.presetSelect.selectedModel.getDotColor());
    }

    changeAccordingValue(){
        let val = this.getCurrentValue();
        this.presetSelect.selectedModel.setDotColor(val);
        this.presetSelect.selectedModel.reset();
    }

    getRGBValues(hexColor){
        this.r = parseInt(hexColor.substr(1,2), 16)
        this.g = parseInt(hexColor.substr(3,2), 16)
        this.b = parseInt(hexColor.substr(5,2), 16)
    }

    getR(){
        return this.r;
    }

    getG(){
        return this.g;
    }

    getB(){
        return this.b;
    }
}