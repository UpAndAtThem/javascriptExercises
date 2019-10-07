let rlSync = require('readline-sync');
let name = rlSync.question("What is your name?\n", {hideEchoBack: true});
console.log(`Good Morning, ${name}`);