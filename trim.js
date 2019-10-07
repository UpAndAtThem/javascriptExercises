function trim(string) {
  var s = leftTrim(string);
  tmp = s.split('').reverse().join('');
  tmp = leftTrim(tmp);

  return tmp.split('').reverse().join('');

  function leftTrim(str) {
    let resStr = '';
    let copyMode = false;

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] == ' ' && copyMode === false) { continue }
      copyMode = true;
      resStr += str[i] 
    }

    return resStr;
  }
}


let testStr = '    Derp  sddfs !    '
console.log(trim(testStr).length);

/*
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
*/