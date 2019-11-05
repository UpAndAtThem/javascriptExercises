// Identify the bug in the following code. Don't run the code until after you've tried to answer.

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

Line 11 raises an argumentError because it thinks a inside the square brackets is a variable that is referencing the index of the arr elements.