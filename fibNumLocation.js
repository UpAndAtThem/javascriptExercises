// Write a function that calculates and returns the index of the first Fibonacci number 
// that has the number of digits specified by the argument. 
// (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// Examples:

console.log(findFibonacciIndexByLength(-16));      // 74

function findFibonacciIndexByLength(length) {
  length = Math.abs(length);
  let i = 2;
  let fibArr = [1, 1];

  while (true) {
    let newFib = (fibArr[i - 2] + fibArr[i - 1]);

    if (String(newFib).length === length) {
      return i + 1;
    } 

    fibArr[i] = newFib;
    i += 1;
  }
}

