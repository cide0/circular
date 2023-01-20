import {InputElement} from "./InputElement.js";

export class DotsInput extends InputElement {
    constructor(presetSelect){
        super('dots-input', presetSelect);
        this.setValue(this.presetSelect.selectedModel.getQuantity());
    }

    changeAccordingValue(){
        let val = this.getCurrentValue();
        this.presetSelect.selectedModel.setQuantity(val);
        this.presetSelect.selectedModel.reset();
    }
}