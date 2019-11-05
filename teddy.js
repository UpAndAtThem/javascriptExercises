// Build a program that randomly generates Teddy's age, and logs it to the console. 
// Have the age be a random number between 20 and 200 (inclusive).

// Example Output:

// Teddy is 69 years old!
// var age = 0;
// var tally = {};

// function teddysAge() {
//   age = Math.ceil((Math.random() * 200 % 201));

//   if(age < 20) { age += 19;} 
  
//   return age;
// }


function inputMatch(numPrompts) {
  function correctSuffix(i) {
    var rightMostDigit = i % 10,
        lastTwoDigits = i % 100;
    if (rightMostDigit == 1 && lastTwoDigits != 11) {
        return "st";
    }
    if (rightMostDigit == 2 && lastTwoDigits != 12) {
        return "nd";
    }
    if (rightMostDigit == 3 && lastTwoDigits != 13) {
        return "rd";
    }
    return "th";
    console.log(num, typeof num);
  }

  var rlSync = require('readline-sync');
  var collection = [];

  for(var i = 1; i <= numPrompts; i += 1) {
    ans = rlSync.question(`Enter the ${i}${correctSuffix(i)} number: `);
    collection.push(Number(ans));
  }

  toCompare = Number(rlSync.question('Enter the last number: '));
  appears = collection.includes(toCompare);
  result = appears ? 'appears' : 'does not appear';

  return `The number ${toCompare} ${result} in [${collection}]`
}

console.log(inputMatch(5));