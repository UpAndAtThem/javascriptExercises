// Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

// Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"

// Write a function that accepts two arguments, an array and an integer index position, 
// and returns the element at the given index. What happens if the index is greater than 
// the length of the array? What happens if it is a negative integer?

function nthElementOf(arr, index) {
  return arr[index];
}

// Write a function that accepts an array as the first argument and an integer value, count, as the second. 
// It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// same except return the last count elements

function lastNOf(arr, count) {
  var lastIndex = arr.length - 1;
  var startingPos = lastIndex - count + 1;

  return (startingPos < 0) ? Array(...arr) : arr.slice(startingPos);
}

// Write a function that accepts two arrays as arguments and returns an array with the first element 
// from the first array and the last element from the second array.

function endsOf(beginningArr, endingArr) {
  var firstElem = beginningArr[0];
  var lastElem = endingArr[endingArr.length - 1];

  return [firstElem, lastElem];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]