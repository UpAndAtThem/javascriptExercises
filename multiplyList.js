function multiplyList(arr1, arr2) {
  return arr1.map((elem, i) => {
    return arr1[i] * arr2[i];
  });
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]