function showMultiplicativeAverage(intArr) {
  result = intArr.reduce((int, accum) => {
    return accum * int;
  }, 1);

  return (result / intArr.length).toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"