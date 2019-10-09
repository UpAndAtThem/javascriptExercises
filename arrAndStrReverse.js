// In this exercise, you will implement your own version of the Array.prototype.reverse method. 
// Your implementation should differ from the built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.
// Examples:

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return inputForReversal.slice().reverse();
  } else {
    return inputForReversal.split("").reverse().join("");
  }
}

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    console.log(reverseArray(inputForReversal));
  } else {
    console.log(reverseString(inputForReversal));
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  var endPos = inputForReversal.length - 1;
  var i;

  for (i = 0; i <= endPos; i += 1) {
    reversed[i] = inputForReversal[endPos - i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  var stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

