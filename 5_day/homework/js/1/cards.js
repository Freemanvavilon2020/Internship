//Реализовать с помощью замыкания колоду карт, которая будет выдавать необходимое количество карт по запросу, можно без рандома.
function colodaCards(){

    let cards = ['T♣️', 'K♣️', 'Q♣️', 'V♣️',
    'T♦️', 'K♦️', 'Q♦️', 'V♦️',
    'T♥️', 'K♥️', 'Q♥️', 'V♥️',
    'T♠️', 'K♠️', 'Q♠️', 'V♠️',
    '♣️6', '♣️7', '♣️8', '♣️9', '♣️10',
    '♦️6', '♦️7', '♦️8', '♦️9', '♦️10',
    '♥️6', '♥️7', '♥️8', '♥️9', '♥️10',
    '♠️6', '♠️7', '♠️8', '♠️9', '♠️10'
  ];

    return function totalAmount(c){

        if(c === 0){
            return "Укажите колличество карт";
        } else if(cards.length >0){
            return cards.splice(0, c);

        }else {
            return "Все карты розданы";
        }
    }
}

let a = colodaCards();
console.log(a(6))
console.log(a(6))
console.log(a(6))
console.log(a(6))
console.log(a(6))
console.log(a(6))
console.log(a(6))
