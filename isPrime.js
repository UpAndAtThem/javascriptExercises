function isPrime(int) {
  for (let i = 2; i < int; i += 1) {
    if (int % i == 0) { return false; }
  }
  return true;
}

console.log(isPrime(42643801));