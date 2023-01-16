import {DomParser} from "../util/DomParser.js";
import {PresetSelect} from "../util/PresetSelect.js";

export class Sidebar{

    constructor(){
        this.setAnimation();
        this.setElements();
    }

    setAnimation(){
        let domParser = new DomParser();
        this.sidebar = domParser.getByID('sidebar');
        this.sidebar_icon = domParser.getByID('sidebar-icon');
        this.arrow_svg = domParser.getByID('arrow-svg');
        this.sidebar_icon.addEventListener('click', this.toggle.bind(this));
    }

    toggle(){
        this.sidebar.classList.toggle('show');
        this.sidebar_icon.classList.toggle('open');
        this.arrow_svg.classList.toggle('opened');
    }

    setElements(){
        this.presetSelect = new PresetSelect();
    }
}