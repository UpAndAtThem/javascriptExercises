// Write a function that returns a new array composed of all values from the 
// first array argument and the second array or value argument. 

function concat(array1, secondArgument) {
  array1 = array1.slice();

  if (Array.isArray(secondArgument)) {
    array1 = array1.concat(secondArgument);
  } else {
    array1.push(secondArgument);
  }

  return array1;
}
