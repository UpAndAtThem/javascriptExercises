// Write a function that takes a sorted array of integers as an argument, 
// and returns an array that includes all the missing integers (in order) 
// between the first and last elements of the argument.

// Examples:

function missing(intArr) {
  var missingInts = [];
  var current = intArr[0] + 1;
  var end = intArr[intArr.length - 1];

  while (current < end) {
    if (!intArr.includes(current)) {
      missingInts.push(current);
    }
    current += 1;
  }
  
  return missingInts;
}


// In the previous exercise, the value of the reference gets copied. For this exercise, 
// only the values of the array should be copied, but not the reference. 
// Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

var myArray = [1, 2, 3, 4];
var myOtherArray = Array(...myArray);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

