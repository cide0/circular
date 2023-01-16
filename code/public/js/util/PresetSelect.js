import {SidebarElement} from "./SidebarElement.js";
import {Default} from "../presets/Default.js";
import {Portal} from "../presets/Portal.js";

export class PresetSelect extends SidebarElement{

    selectedModel = '';

    constructor(){
        super('preset-st');
        this.htmlObject.addEventListener('change', this.changePreset.bind(this));
        this.selectedModel = new Default();
    }

    changePreset(){
        let valSelected = this.getCurrentValue();
        if(valSelected === '1'){
            this.selectedModel = new Default(200);
            this.selectedModel.reset();
        }
        else if(valSelected === '2'){
            this.selectedModel = new Portal(600);
            this.selectedModel.reset();
        }
    }

    getSelectedModel(){
        return this.selectedModel;
    }
}