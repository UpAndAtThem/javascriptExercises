// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
var rlSync = require('readline-sync');

function madlibs() {
  var noun = rlSync.question('Enter a noun: ');
  var verb = rlSync.question('Enter a verb: ');
  var adjective = rlSync.question('Enter a adjective: ');
  var adverb = rlSync.question('Enter a adverb: ');

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
}

madlibs()