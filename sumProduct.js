// Write a program that asks the user to enter an integer greater than 0, 
// then asks if the user wants to determine the sum or the product of all 
// numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

let rlSync = require('readline-sync');
let choiceResult = 0;

let endRange = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
let computionalChoice = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

console.log(productOfRange(1, endRange), 'product');
console.log(sumOfRange(1, endRange), 'sum');

function productOfRange(startRng, endRng) {
  let product = 1;

  for (let i = startRng; i <= endRange; i += 1) {
    product *= i;
  }

  return product;
}

function sumOfRange(startRng, endRng) {
  let sum = 0;

  for (let i = startRng; i <= endRange; i += 1) {
    sum += i;
  }

  return sum;
}


