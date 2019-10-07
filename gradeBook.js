// Write a function that determines the mean (average) of the three scores passed to it, 
// and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values 
// greater than 100.

// Examples:

// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

function getGrade(...arr) {
  sum = arr.reduce((accum, grade) => {
    return grade + accum
  })

  var grade;
  var avg = (sum / arr.length).toFixed(2);
  
  if (avg >= 90) {
    grade = 'A';
  } else if (avg >= 80) {
    grade = 'B';
  } else if (avg >= 70) {
    grade = 'C';
  } else if (avg >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(grade, avg);
}

getGrade(70, 80, 90);