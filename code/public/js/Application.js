import {Sidebar} from "./sidebar/Sidebar.js";
import {PresetSelect} from "./util/PresetSelect.js";
import {DotsInput} from "./util/DotsInput.js";
import {DotColorInput} from "./util/DotColorInput.js";

export class Application{
    constructor(){
        this.sidebar = new Sidebar();
        this.setSidebarElements();
    }

    setSidebarElements(){
        this.presetSelect = new PresetSelect();
        this.inputDots = new DotsInput(this.presetSelect);
        this.inputDotColor = new DotColorInput(this.presetSelect);
    }
}