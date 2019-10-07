// function isInt(num) {
//   return num % 1 == 0;
// }

// function evenOrOdd(int) {
//   if (isInt(int)) {
//     let type = (int % 2 == 0) ? "even" : "odd";
//     console.log(type);
//     return type;
//   }
//   console.log("You must provide an integer.")
//   return "You must provide an integer."
// }


// function uppercaseTenOrGreater(word) {
//   return (word.length >= 10) ? word.toUpperCase() : word;
// }

// console.log(uppercaseTenOrGreater("hello"));
// console.log(uppercaseTenOrGreater("world"));
// console.log(uppercaseTenOrGreater("supercalifragilisticexpelidocious"));

// function numberRange(int) {
//   if (int < 0) {
//     console.log(`${int} is less than 0`);
//   } else if (int <= 50) {
//     console.log(`${int} is between 0 and 50`);
//   } else if (int <= 100) {
//     console.log(`${int} is between 51 and 100`);
//   } else {
//     console.log(`${int} is greater than 100`);
//   }
// }

// numberRange(25);   // '25 is between 0 and 50'
// numberRange(75);   // '75 is between 51 and 100'
// numberRange(125);  // '125 is greater than 100'
// numberRange(-25);