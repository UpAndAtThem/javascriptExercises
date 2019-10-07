// Write a function that iterates over the integers from 1 to 100, inclusive. 
// For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". 
// For numbers which are multiples of both three and five, log "FizzBuzz". 
// For all other numbers, log the number.

function fizzBuzz() {
  for (let i = 0; i <= 100; i += 1) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log('FizzBuzz');
        continue;
      }
      console.log('Fizz');
      continue;
    }
    console.log(i);
  }
}

fizzBuzz();