import {DomParser} from "./util/DomParser.js";
import {Sidebar} from "./sidebar/Sidebar.js";
import {Portal} from "./presets/Portal.js";
import {Default} from "./presets/Default.js";

let domParser = new DomParser();
let sidebar = new Sidebar(domParser);
let presetSelect = domParser.getByID('preset-st');
let def = new Default(200);

presetSelect.addEventListener('change', () => {
    let valSelected = presetSelect.value;
    if(valSelected === '1'){
        let def = new Default(200);
        def.reset();
    }
    else if(valSelected === '2'){
        let portal = new Portal(200);
        portal.reset();
    }
});

