// Write a function logMultiples that takes one argument number. 
// It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. 
// Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

function logMultiples(multiple) {
  for (let i = 100; i >= multiple; i -= 1) {
    if (i % multiple == 0) {
      console.log(i);
    }
  }
}

logMultiples(9);