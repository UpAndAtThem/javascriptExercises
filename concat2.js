// The concat function from the previous exercise could only concatenate a maximum of two arrays. 
// For this exercise, you are going to extend that functionality. 
// Refactor the concat function to allow for the concatenation of two or more arrays or values.

// Examples:

function concat(...arr) {
  result = [];
  numElements = arr.length; 

  for (var i = 0; i < numElements; i += 1) {
    if (Array.isArray(arr[i])) {
      result = result.concat(arr[i])
    } else {
      result.push(arr[i]);
    }
  }

   return result;
}
