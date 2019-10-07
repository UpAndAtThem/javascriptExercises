// Create a function named rollCall that takes an array of first names as an argument and logs all the names to the console, 
// one name per line. You should log the names in the same sequence they appear in the array. Use a for loop to process the array.

function rollCall(namesArr) {
  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(namesArr[i]);
  }
}


names = ['Jason', 'Roger', 'Erika', 'Jim', 'Shelby', 'Tish'];

rollCall(names);