// Write a function named push that accepts two arguments: an Array and any other value. 
// The function should append the second argument to the end of the Array, and return the new length of the Array.

function push(array, newValue) {
  array[array.length] = newValue;
  return array.length;
}

// Write a function named pop that accepts one argument: an Array. 
// The function should remove the last element from the array and return it.

function pop(array) {
  popped = array[array.length - 1];

  array.length = array.length - 1;
  return popped;
}

// Write a function named unshift that accepts two arguments: an Array and a value. 
// The function should insert the value at the beginning of the Array, and return the new length of the array. 
// You will need a for loop for this problem.

function unshift(array, newValue) {
  var tmp;
  var newTemp;
  var newLength = array.length + 1;

  for (let i = 0; i < newLength; i += 1) {
    if (i === 0) {
      tmp = array[i];
      array[i] = newValue;
      continue;
    }

    newTemp = array[i];
    array[i] = tmp;
    tmp = newTemp;
  }
  return newLength;
}

// Write a function named shift that accepts one argument: an Array. 
// The function should remove the first value from the beginning of the Array and return it.

function shift(array) {
  var lastChar  = array[array.length - 1];
  var firstElem = array[0];

  for (var i = array.length - 1; i > 0; i -= 1) {
    var tmp = array[i - 1];
    array[i - 1] = lastChar;
    lastChar = tmp;
  }

  array.length = array.length - 1;
  return firstElem;
}

var count = [1, 2, 3, 4, 5];

console.log(shift(count));  // 1
console.log(count);        // [2, 3, 4, 5]  

