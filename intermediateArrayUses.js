// Write a function that creates and returns a new array from its array argument. 
// The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  return arr.filter(function(elem, i){
    if (i % 2 !== 0) {
      return elem;
    }
  });
}


// Write a function that takes two arrays and returns a new array whose even positions come from the first array, 
// and whose odd positions come from the second array. Assume that both arrays have equal length.

function combinedArray(even, odd) {
  var resArr = [];

  for (var i = 0; i < even.length; i += 1) {
    resArr.push(even[i]);
    resArr.push(odd[i]);
  }

  return resArr;
}

// Write a function that takes an array argument and returns a new array that contains all the argument's elements 
// in their original order followed by all the argument's elements in reverse order.

function reverseConcat(arr) {
  var arrCopy = Array(...arr);
  var newReverseArr = Array(...arr).reverse();

  return arrCopy.concat(newReverseArr);
}

// Use the array sort method to create a function that takes an array of numbers and returns a new array 
// of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  return arr.slice().sort((a, b) => {
    return b - a;
  });
}

// Write a function that takes an array of arrays as an argument, 
// and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  return arr.map(function (innerArr) {
    return innerArr.reduce(function(accum, val) {
      return accum + val;
    });
  });
}

// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  var index = {};

  return arr.filter(elem => {
    if (index[elem]) {
      return undefined;
    } else {
      index[elem] = true;
      return elem;
    }
  });
}


