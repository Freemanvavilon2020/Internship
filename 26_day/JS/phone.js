const number = prompt('Введите номер'); //тут неотформатированное значение
const pattern = new RegExp(`(^\\d{${number.length % 9}})(\\d{2})(\\d{3})(\\d{2})(\\d{2}$)`);
const formattedNumber = number.replace(pattern, '+$1($2)$3-$4-$5');
console.log(formattedNumber); //выведет +375(29)770-27-03
console.log("test"); //выведет +375(29)770-27-03
