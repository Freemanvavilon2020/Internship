const rubsName = ['рубль', 'рублей', 'рубля'];
const coinsName = ['копейка', 'копеек', 'копейки'];
const data = 111111;

const coins = data % 100;
const rubs = Math.floor(data / 100);

let coinsString = '';
let rubsString = '';

const dozRemainderRub = rubs % 10;
const hundRemainderRub = rubs % 100;

if ((dozRemainderRub === 1) && (hundRemainderRub !== 11)) {
  rubsString = rubsName[0]
} else if (((hundRemainderRub >= 11) && (hundRemainderRub <= 19)) || (dozRemainderRub === 0) || ((dozRemainderRub >= 5) && (dozRemainderRub <= 9))) {
  rubsString = rubsName[1]
} else if ((dozRemainderRub >= 2) && (dozRemainderRub <= 4)) {
  rubsString = rubsName[2]
}

const dozRemainder = coins % 10;
const hundRemainder = coins % 100;

if ((dozRemainder === 1) && (hundRemainder !== 11)) {
  coinsString = coinsName[0]
} else if (((hundRemainder >= 11) && (hundRemainder <= 19)) || (dozRemainder === 0) || ((dozRemainder >= 5) && (dozRemainder <= 9))) {
  coinsString = coinsName[1]
} else if ((dozRemainder >= 2) && (dozRemainder <= 4)) {
  coinsString = coinsName[2]
}


console.log(`${rubs} ${rubsString} ${coins} ${coinsString}`)


