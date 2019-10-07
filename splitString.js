splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter

splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

console.log(splitString('whooa this is Wild!'));

function splitString(str, delimiter) {
  let subStr = '';

  for (let i = 0; i < str.length; i += 1) {
    if (!delimiter) { return "ERROR ERROR";}

    if (delimiter === ''){
      console.log(str[i]);
    } else if (str[i] === delimiter) {
      console.log(subStr);
      subStr = '';
    }  else {
      subStr += str[i];
    }
  }

  if (subStr) { console.log(subStr);}
}