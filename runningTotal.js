/*
# init a total sum at 0
# init resultArr at []
# Iterate over the array
  # add total sum and current elem value
  # push onto resultArr
# return arr
*/

function runningTotal(arr) {
  var sum = 0;
  var resultArr = [];

  arr.forEach(elem => {
    resultArr.push(sum += elem);
  });

  return resultArr;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []