import {SidebarElement} from "./SidebarElement.js";

export class InputElement extends SidebarElement{
    constructor(elementID, presetSelect){
        super(elementID);
        this.presetSelect = presetSelect;
        this.htmlObject.addEventListener('input', this.changeAccordingValue.bind(this));
    }

    changeAccordingValue(){}

    setValue(value){
        this.htmlObject.value = value;
    }

    hide(){
        this.htmlObject.classList.add('hidden');
    }

    show(){
        this.htmlObject.classList.remove('hidden');
    }
}