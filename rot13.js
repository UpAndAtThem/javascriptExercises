function rot13(string) {
  let rotatedStr = string.replace(/[a-z]/gi, char => {
    let start = (char.charCodeAt(0) <= 90) ? 65 : 97;

    let rotated = String.fromCharCode(start + (char.charCodeAt(0) - start + 13) % 26);

    return rotated;
  });

  return rotatedStr;
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// // logs:
// Teachers open the door, but you must enter by yourself.