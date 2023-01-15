import { DomParser} from "../util/DomParser.js";

export class Sidebar{
    constructor(){
        let domParser = new DomParser();
        this.sidebar = domParser.getByID('sidebar');
        this.sidebar_icon = domParser.getByID('sidebar-icon');
        this.arrow_svg = domParser.getByID('arrow-svg');
        this.sidebar_icon.addEventListener('click', this.setSidebarToggle.bind(this));
    }

    setSidebarToggle(){
        this.sidebar.classList.toggle('show');
        this.sidebar_icon.classList.toggle('open');
        this.arrow_svg.classList.toggle('opened');
    }
}