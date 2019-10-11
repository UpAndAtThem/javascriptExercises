// Implement a function that takes a String as an argument and returns an object that contains a count of 
// the repeated characters.

function repeateMoreThan(amount, obj) {
  var newObj = {};

  for (letter of Object.keys(obj)) {
    if (obj[letter] > amount) {
      newObj[letter] = obj[letter];
    }
  }

  return newObj;
}

function repeatedCharacters(string) {
  string = string.toLowerCase();
  result = {};

  string.split("").forEach(letter => {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  });

  return repeateMoreThan(1, result);
}

