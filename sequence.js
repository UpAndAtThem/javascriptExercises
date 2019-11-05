function sequence(endNum) {
  var START_NUM = 1;
  var res = [];

  for(i = START_NUM; i <= endNum; i += 1) {
    res.push(i);
  }

  return res;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]