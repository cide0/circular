import {DomParser} from "./DomParser.js";

export class SidebarElement{
    constructor(elementID){
        let domParser = new DomParser()
        this.htmlObject = domParser.getByID(elementID);
    }

    getCurrentValue(){
        return this.htmlObject.value;
    }
}