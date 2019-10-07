// logInBox('To boldly go where no one has gone before.');
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+


function logInBox(message) {
  function horizontalBox(size) {
    console.log(`+${'-'.repeat(size + 2)}+`);
  }

  function sideNoMessage(size) {
    console.log(`|${' '.repeat(size + 2)}|`);
  }

  function sideMessage(message) {
    console.log(`| ${message} |`);
  }

  var length = message.length;

  horizontalBox(length);
  sideNoMessage(length);
  sideMessage(message);
  sideNoMessage(length);
  horizontalBox(length);
}

logInBox('');