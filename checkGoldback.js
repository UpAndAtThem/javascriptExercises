function isPrime(number) {
  divisors = listDivisors(number);
  return divisors.length == 2;
}

function listDivisors(n) {
  if (n < 1)
    throw "Argument error";

  var small = [];
  var large = [];
  var end = Math.floor(Math.sqrt(n));

  for (var i = 1; i <= end; i++) {
    if (n % i == 0) {
      small.push(i);
      if (i * i != n)  // Don't include a square root twice
        large.push(n / i);
    }
  }
  
  large.reverse();
  return small.concat(large);
}

function checkGoldbach(int) {
  goldbachPairs = [];
  for (let i = 2; i < int; i += 1) {
    for (let j = 2; j < int; j += 1) {
      if (i > j) { continue; }
      if (isPrime(i) && isPrime(j) && i + j == int) {
        goldbachPairs.push([i, j]);
      }
    }
  }
  return goldbachPairs;
}

console.log(checkGoldbach(122));
