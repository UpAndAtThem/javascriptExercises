function average(intArr) {
  var sum = intArr.reduce((int, accum) => {
    return int + accum;
  });

  return Math.ceil(sum / intArr.length - 1);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40