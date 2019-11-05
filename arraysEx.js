// Create a function that returns the contents of the array it receives as an argument, 
// but with the values in reversed order. Your function should use a for loop that iterates over 
// the elements in the array from the end of the array to the beginning, and pushes each element's 
// value to a new result array. Be sure to start your loop with the element whose index is one less 
// than the input array's length.

// # use for loop starting with 1 less the length of the arr passed in as an argument.

function reverse(arr) {
  var result = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}


// Create a function that finds the first instance of a value in an array and returns the index position of the value, 
// or -1 if the value is not in the array. The function should take two arguments: the value to search for, 
// and the array to search. Use the break keyword to exit the loop immediately when you find the first instance of the value. 
// If you don't find the value, make sure you don't use the final index value as your return value.

// # 2 arguments
//   # val = value to search for
//   # arr = array to search

// # iterate over arr passed in as argument
//   # if the current element matches val
//     # return the current index of i in the for loop.

// # return -1

function indexOfElem(value, arr) {
  for (var i = 0; i < arr.length; i+= 1) {
    if (arr[i] === value) { return i }
  }
  return -1;
}


// Write a function that returns a string of all the values in an array with no intervening content. 
// For example, your function should return '1a4' if the argument is [1, 'a', 4]. 
// Use a for loop to process the array elements in sequence, and coerce each value in the array 
// to a String before concatenating it to the result string.

// its parameters are a single array
// return: string
// initialize resultString to empty string.
// iterate over array with for loop
//   concat current value with resultString
// return resultString

function concatValues(arr) {
  resultString = '';

  for (var i = 0; i < arr.length; i += 1) {
    resultString += String(arr[i]);
  }

  return resultString;
}



