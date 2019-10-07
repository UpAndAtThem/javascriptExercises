let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? : "));
let years = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

years.forEach(tellAge);

function tellAge(elem, i, elems {
  console.log(`In ${elem} years, you will be ${age + elem}`);
  console.log(`i = ${i}`);
  console.log(`elem = ${elems}`);
  console.log(z);
}