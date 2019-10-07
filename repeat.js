console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined

function repeat(str, times) {
  let multStr = '';

  if (times !== parseInt(times) || times < 0) {
    return undefined;
  }

  for (let i = 1; i <= times; i += 1) {
    multStr += str;
  }

  return multStr;
}