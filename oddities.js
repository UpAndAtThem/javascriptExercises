// Oddities
// The oddities function takes an array as an argument and returns a new array 
// containing every other element from the input array. The values in the 
// returned array are the first (index 0), third, fifth, and so on, 
// elements of the input array. The program below uses the array returned 
// by oddities as part of a comparison. Can you explain the results of these comparisons?

function oddities(array) {
  var oddElements = [];
  var i;

  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false