export class Board {
    constructor(name) {
        this.name = name
        this.mainBlock = document.querySelector('.main-block');
        this.block = "";
        this.flag = true;
    }
    getName() {
        return this.name
    }


}



// let a = new Board('доска');
//
// a.getName();
