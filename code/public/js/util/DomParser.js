export class DomParser{
    constructor(){}

    getByID(id){
        return document.getElementById(id);
    }

    getRoot(){
        let root = document.querySelector(':root');
        return getComputedStyle(root);
    }
}