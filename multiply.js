let rlSync = require("readline-sync");

let first_number = Number(rlSync.question("Enter the first number: "));
let second_number = Number(rlSync.question("Enter the second number: "));


console.log(`${first_number} * ${second_number} = ${ (first_number * second_number).toFixed(2) }`);