function repeater(str) {
  return str.split("").map(char => char + char).join("");
}

function doubleConsonants(str) {
  reg = /[b-df-hj-np-tv-xz]/i;

  
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""