// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. 
// If the number is divisible by both 3 and 5, append an "!" to the number.

function multiplesOfThreeAndFive(upper_end) {
  for (let i = 1; i <= 100; i += 1) {
    if (i % 3 == 0 || i % 5 == 0) {
      let num = String(i);
      if (i % 3 == 0 && i % 5 == 0) {
        num += "!";
      }
      console.log(num);
    }
  }
}

multiplesOfThreeAndFive(50);