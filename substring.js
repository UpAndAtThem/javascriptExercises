function substring(string, start, end) {
  if (start > end) {
    tmp = start;
    start = end;
    end = tmp;
  }

  if (start < 0 || isNaN(start)) { start = 0;}
  if (end < 0 || isNaN(end)) { end = string.length;}

  let resStr = '';

  for (let i = 0; i < string.length - start; i += 1) {
    console.log(i, start + i, end)
    if (start + i === end) { break }
    resStr += string[start + i];
  }
  return resStr;
}

var string = 'hello world';

// substring(string, 2, 4);    // "ll"
// substring(string, 4, 2);    // "ll"
// substring(string, 0, -1);   // ""
// substring(string, 2);       // "llo world"
console.log(substring(string, 0, 5).length);     // "hello world"
// substring(string, 8, 20);   // "rld"