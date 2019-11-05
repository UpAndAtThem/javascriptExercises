function doubleConsonants(str) {
  var regex = /[b-df-hj-np-tv-xz]/gi;
  return str.replace(regex, char => { return char + char });
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""