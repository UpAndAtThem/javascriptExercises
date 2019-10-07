// Write a password guessing program that tracks how many times the user enters the wrong password. 
// If the user enters the password wrong three times, log 'You have been denied access.' 
// and terminate the program. If the password is correct, log 'You have successfully logged in.' 
// and end the program.
var password = 'Password';
const rl = require('readline-sync');

function isCorrectCheck(test) {
  if (password === response) {
      console.log("You got it");
      correctPassword = true;
    } else {
      console.log("that is incorrect");
      attempt += 1; 
    }
}

function guessPassword() {
  const MAX_ATTEMPTS = 3;
  var correctPassword = false;
  var attempt = 0;
  var response;

  while (!correctPassword) {
    let response = rl.question('What is your password: ');

    if (attempt >= MAX_ATTEMPTS) {
      console.log("This account has been locked.");
      return;
    }  
  }
}

guessPassword();