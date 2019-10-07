// Note: 1 square meter == 10.7639 square feet

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

let rlSync = require('readline-sync');

const SQUARE_FEET_FROM_METER = 10.7639;

function dimensionsPrompt() {
  let length = parseInt(rlSync.question('Enter the length of the room in meters:\n'), 10);
  let width = parseInt(rlSync.question('Enter the width of the room in meters:\n'), 10);

  console.log(`The area of the room is ${length * width} square meters. (${(length * width) * SQUARE_FEET_FROM_METER } square feet)`);
}

dimensionsPrompt();