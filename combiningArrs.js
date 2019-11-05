// # initialize empry resultsArray []
// # iterate over arguments object
//   # iterate over each array
//     push onto resultsArray if not present.
// # return resultsArray.

function union(...arrays) {
  resultArr = [];

  arrays.forEach(arr => {
    arr.forEach(int => {
      if (!resultArr.includes(int)) {
        resultArr.push(int);
      }
    });
  });

  return resultArr;
}

union([1, 3, 5], [3, 6, 9], [2, 5, 7], [1, 2, 10]);    // [1, 3, 5, 6, 9]