function centerOf(str) {
  var strLen = str.length;
  var middle = Math.floor(strLen / 2);

  return (strLen % 2 === 0 ? str[middle - 1] + str[middle] : str[middle])
}

centerOf('I Love Ruby');      // "e"
centerOf('Launch School');    // " "
centerOf('Launch');           // "un"
centerOf('Launchschool');     // "hs"
centerOf('x');                // "x"