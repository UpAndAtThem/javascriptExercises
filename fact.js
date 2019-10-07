function factorial(pos_int) {
  if (pos_int == 1) {
    return pos_int;
  } else {
    return pos_int * factorial(pos_int - 1);
  }
}

console.log(factorial(5));

function logEven(arr) {
  arr.map(function (res) {
    if (res % 2 == 0) {
      console.log(res);
    }
  });
}