// Write a function named objectHasProperty that takes two arguments: an Object and a String. 
// The function should return true if the Object contains a property with the name given by the String, 
// false otherwise.

function objectHasProperty(object, string) {
  return Object.keys(object).includes(string)
}

// Write a function named incrementProperty that takes two arguments: an Object and a String. 
// If the Object contains a property with the specified name, the function should increment 
// the value of that property. If the property does not exist, the function should add a 
// new property with a value of 1. The function should return the new value of the property.

function incrementProperty(object, string) {
  if (objectHasProperty(object, string)) {
    object[string] += 1;
  } else {
    object[string] = 1;
  }

  return object[string];
}

// Write a function named copyProperties that takes two Objects as arguments. 
// The function should copy all properties from the first object to the second. 
// The function should return the number of properties copied.

function copyProperties(obj1, obj2) {
  var numCopied = Object.keys(obj1).length;
  var count = 1;
  
  for (propName in obj1) {
    obj2[propName] = obj1[propName];
  }

  return numCopied;
}

// Write a function named wordCount that takes a single String as an argument. 
// The function should return an Object that contains the counts of each word that appears 
// in the provided String. In the returned Object, you should use the words as keys, 
// and the counts as values.

function wordCount(string) {
  var words = string.split(' ');
  var index = {};

  words.forEach(word => { index[word] ? index[word] += 1 : index[word] = 1; });

  return index;
}
