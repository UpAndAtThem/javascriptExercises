
// function doubler(number, caller) {
//   console.log('This function was called by ' + caller + '.');
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.

function makeDoubler(caller) {
  return function (c) {
    console.log(`This fuction was called by ${caller}`);
    return  c * 2;
  }
}

var doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10

// logs:
// This function was called by Victor.


// welcome to the Matrix!
