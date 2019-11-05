function interleave(...arrays) {
  var resultArr = [];

  for(i = 0; i < arrays[0].length; i += 1) {
    arrays.forEach(arr => {
      resultArr.push(arr[i]);
    });
  }

  return resultArr;
}

interleave([1, 2, 3], ['a', 'b', 'c'], [true, false, undefined]);    // [1, "a", 2, "b", 3, "c"]

