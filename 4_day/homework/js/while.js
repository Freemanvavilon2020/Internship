//Задания к оператору while
//Наибольший общий делитель двух чисел (алгоритм Евклида)

let a = 30
let b = 18
 
while (a != 0 && b != 0)
{
    if (a > b)
        { a = a % b}
       
    else
        {b = b % a}
        console.log(a + b);
}

//Разложение на множители целых чисел

var factoring = function(n) {
  var m = n;
  var o = n;
  for(i = 2; i < m/2 + 1; i++) {
    if (n % i === 0) {
      var p = 0;
      while (n % i === 0) {
        n = n / i;
        p++;
      }

      if (p > 1) {
        console.log(i + "^" + p);    
      }
      else {
        console.log(i);
      }
    }
    else {}
  }
};

factoring(userNumber);








