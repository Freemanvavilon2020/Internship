const getPrime = (n) => {
  let array = [];
  let max = Math.sqrt(n);
  let result = [];

  for (let i = 2; i < n; i++) {
    array.push(true);
  }

  for (let i = 2; i <= max; i++) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if(array[i]) {
      result.push(i);
    }
  }

  console.log(result);
}

getPrime(100)
