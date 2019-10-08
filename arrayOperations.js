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

// Write a function indexOf that accepts two arguments: an array and a value. 
// The function returns the first index at which the value can be found, or -1 if the value is not present.

// iterate through the array.
  // return the index when the index and value are ===
// return -1

function indexOf(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) { return i;}
  }
  return -1;
}

// Write a function lastIndexOf that accepts two arguments: an array and a value. 
// The function returns the last index at which the value can be found in the array, 
// or -1 if the value is not present.

function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === value) { return i;}
  }
  return -1;
}

// Write a function named slice that accepts three arguments: an Array, a start index, and an end index. 
// The function should return a new Array that contains values from the original Array 
// starting with the value at the starting index, and including all values up to but not including the end index. 
// Do not modify the original Array.

// You may use functions that were answers to previous practice problems to complete this problem, 
// but do not use any built-in Array methods.

// iterate for (i = startIndex; i < endIndex; i += 1)

function slice(array, startIndex, endIndex) {
  var result = [];

  for (var i = startIndex; i < endIndex; i += 1) {
    push(result, array[i]);
  }

  return result;
}

// Write a function named splice that accepts three arguments: an Array, a start index, 
// and the number of values to remove. The function should remove values from the original Array, 
// starting with the first index and removing the specified number of values. 
// The function should return the removed values in a new Array.

// You may use functions that were answers to previous practice problems to complete this problem, 
// but do not use any built-in Array methods.

function splice(array, startIndex, amountToRemove) {
  var segment = [];

  for (var i = startIndex; i < startIndex + amountToRemove; i += 1) {
    push(segment, array[i]);
    array[i] = array[i + amountToRemove];
  }
  
  array.length = array.length - amountToRemove;

  return segment;
}

// Write a function named concat that accepts two Array arguments. 
// The function should return a new Array that contains the values from each of the original Arrays.

// You may use functions that were answers to previous practice problems to complete this problem, 
// but do not use any built-in Array methods.

function concat(firstArr, secondArr) {
  var result = [];

  for (var i = 0; i < firstArr.length; i += 1) {
    push(result, firstArr[i]);
  }

  for (var i = 0; i < secondArr.length; i += 1) {
    push(result, secondArr[i]);
  }

  return result;
}

// Write a function named join that accepts two arguments: an Array and a String. 
// The function should coerce each value in the Array to a String, 
// and then join those values together using the second argument as a separator. 
// You may assume that a separator will always be passed.

// You can call the String function on any JavaScript value to get its String representation.

function join(array, delimiter) {
  var resultStr = '';

  for (var i = 0; i < array.length; i += 1) {
    resultStr += array[i]
    if (i < array.length - 1) { 
      resultStr += delimiter;
    }
  }

  return resultStr;
}

