crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""


// # initialize previousChar set to blank string.
// # iterate over string
//   # if current char matches previousChar
//     # continue
//   # else
//     # concat to resultStr
function crunch(string) {
  let previousChar = '';
  let resultStr = '';

  for (let i = 0; i < string.length; i += 1) {
    let currentChar = string[i];

    if (currentChar === previousChar) {
      continue;
    } else {
      resultStr += currentChar;
      previousChar = currentChar;
    }
  }

  return resultStr;
}