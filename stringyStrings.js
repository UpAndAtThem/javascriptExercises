function stringy(length) {
  var currentChar;
  var result = '';

  for (i = 1; i <= length; i += 1) {
    currentChar = i % 2 == 0 ? '0' : '1';
    result += currentChar; 
  }

  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"