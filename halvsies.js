function halvsies(arr) {
  firstArrLen = Math.ceil(arr.length / 2);
  secondArrLen = Math.floor(arr.length / 2);

  return [arr.slice(0, firstArrLen), arr.slice(firstArrLen)]
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
halvsies([1, 5, 2, 4, 3, 4, 7, 8, 9, 2, 3, 5, 6, 3, 4, 6, 4, 2, 4, 9, 2]);