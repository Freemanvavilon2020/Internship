import {Board} from "./module/board.js";

import {Checker} from "./module/checker.js";

import {Party} from "./module/party.js";

import {Players} from "./module/players.js";

import {Rule} from "./module/rule.js";



let board = new Board('доска');
console.log(board.getName());

let ch = new Checker('шашка');
console.log(ch.getName());

let pa = new Party('партия');
console.log(pa.getName());

let pl = new Players('игроки');
console.log(pl.getName());

let ru = new Rule('правила');
console.log(ru.getName());





function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let checkerBlack;
    let checkerWhite;
    let flag = true;
    let data = [];

    for (let i = 0; i<8; i++) {
        for(let j = 0; j<8; j++) {
            if(j===0) {
                flag = !flag;
            }
            block = document.createElement('div');

            
            if(flag) {
                block.className = 'block black';
                if(j<3) {
                    
                }

            checkerBlack = document.createElement('div');
            checkerWhite = document.createElement('div');
            // block.setAttribute('id', )



            if(flag) {
                block.className = 'block black';
                if(i<3) {
                    checkerBlack.className = 'checker_black';
                } else if (i>4){
                    checkerWhite.className = 'checker_white';
                }




            } else {
                block.className = 'block white';
            }
            mainBlock.appendChild(block);
            block.appendChild(checkerWhite);
            block.appendChild(checkerBlack);
            flag = !flag
        }
    }

}

}
