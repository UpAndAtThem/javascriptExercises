/*
# split string into array of words.
# map over words
  # split word at every char
  # store first elem in tmp var
  # reassign first elem with last elems value
  # reassign last elem with tmp var
  # join array and return the return string
*/

function swap(str) {
  function swapFirstLast(str) {
    var letterArr = str.split("");

    var tmp = str[0];
    letterArr[0] = letterArr[letterArr.length - 1];
    letterArr[letterArr.length - 1] = tmp;

    return letterArr.join(""); 
  }

  var wordArr = str.split(" ");

  wordArr = wordArr.map(word => {
    return swapFirstLast(word);
  });

  return wordArr.join(" ");
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"