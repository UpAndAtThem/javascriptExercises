function indexOf(string, substring) {
  let len = string.length - substring.length;

  for (let i = 0; i <= len; i += 1) {
    let slicedStr = string.slice(i, i + substring.length);
    if (slicedStr === substring) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(string, substring) {
  let rString = string.split('').reverse().join('');
  let rSubstring = substring.split('').reverse().join('');

  let revIndex = indexOf(rString, rSubstring)

  return string.length - (revIndex + substring.length);
}
