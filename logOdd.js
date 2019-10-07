/* function that takes an integer and logs all the odd numbers from 1 to upper_end */

function logOddNumbers(upper_end) {
  for (let i = 1; i <= upper_end; i += 1) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

logOddNumbers(50);