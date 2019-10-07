function toLowerCase(string) {
  newStr = '';
  asciiLetters = [];

  for(let i = 0; i < string.length; i += 1) {
    asciiLetterVal = string.charCodeAt(i);
    /* if asciiLetterVal is in the capital letter range 65..90*/
    if (asciiLetterVal <= 90 && asciiLetterVal >= 65) {
      /* lowercase values are 32 positions away*/
      asciiLetterVal += 32
    }

    asciiLetters.push(asciiLetterVal);
  }
  return String.fromCharCode(...asciiLetters);
}

console.log(toLowerCase('ABCHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEFZZZAAA!,*&^%$'));      // "abcdef"