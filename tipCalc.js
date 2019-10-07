// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

let rlSync = require('readline-sync');

function calcTip(bill, percentage) {
  return (bill * ( percentage / 100.00)).toFixed(2);
}

function calcTotalBill(bill) {
  let percentage = parseInt(rlSync.question('What is the tip percentage?: '), 10);
  let tip = Number(calcTip(bill, percentage));
 
  console.log(`Your total bill with a $${tip} (${percentage} percent tip) is: ${(bill + tip).toFixed(2)}`);
}

calcTotalBill(100.25);