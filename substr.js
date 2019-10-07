function substr(string, start, length) {
  if (start < 0) { start = string.length + start; }

  let resString = '';

  for (let i = 0; i < length; i += 1) {
    if (i >= string.length - start) { break }
    resString += string[start + i];
  }

  return resString;
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""