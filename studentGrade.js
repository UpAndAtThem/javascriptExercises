function isValidScore(s) {
  return String(Number(s)) === s;
}

function getScores(num_students) {
  let grades = [];
  for (let i = 1; i <= num_students; i += 1) {
    while (true) {
      let score = rl.question(`Enter score ${i}: `);
      if (isValidScore(score)) {
        grades.push(Number(score));
        break;
      }
      console.log('That is not a number');
    }
  } 
  return grades;
}

function averageScore(scores) {
  sum = scores.reduce((accum, score) => {
    return accum + score
  })

  return (sum / scores.length);
}

function letterGrade(score) {
  let grd;

  if (score >= 90) {
    grd = 'A'
  } else if (score >= 80) {
    grd = 'B'
  } else if (score >= 70) {
    grd = 'C'
  } else if (score >= 60) {
    grd = 'D'
  } else {
    grd = 'F'
  }
  return grd;
}

let rl = require('readline-sync');
const NUM_STUDENTS = 5;

let grades = getScores(NUM_STUDENTS);
let average = averageScore(grades);
let letterGradeOfAvg = letterGrade(average);
console.log(`The average of the scores is ${average} percent. Letter grade: ${letterGradeOfAvg}`);

