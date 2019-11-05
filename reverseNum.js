// Write a function that takes a positive integer as an argument, 
// and returns that number with its digits reversed.

// Examples:
// # INPUT
// # takes int
// # OUTPUT
// # integer.  
// # reverses the number argument and trims leading zeros.
// # ex: 12000 => 21 # because 00021 with leading zeros trimmed is 21

// # procedure:
// #

function reverseNumber(int) {
  function removeLeadingZeros(arr) {
    var newArr = [...arr];

    if (newArr[0] === '0') {
      newArr.shift();
      removeLeadingZeros(newArr);
    }

    return newArr;
  }

  var revIntStr = String(int).split("").reverse();
  return Number(removeLeadingZeros(revIntStr).join(""));
}