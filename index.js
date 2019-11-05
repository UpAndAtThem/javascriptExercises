function curry(binaryFunc, operand1) {
  return function (operand2) {
    return binaryFunc(operand1, operand2);
  }
}

function add(first, second) {
  return first + second;
}

function twice(binFunc) {
  return function (operand) {
    return binFunc(operand, operand);
  }
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

function reverse(binFunc) {
  return function(second, first) {
    return binFunc(first, second);
  }
}

function composeu(unary1, unary2) {
  return function(num) {
    num = unary1(num);
    num = unary2(num);
    return num;
  }
}

function composeb(binary1, binary2) {
  return function (int1, int2, int3) {
    return binary2(binary1(int1, int2), int3);
  }
}

// var doubl = twice(add);
// var square = twice(mul);

// composeu(doubl, square);
// composeb(add, mul);

function limit(binary, lim) {
  var numInvocations = 0;

  return function(first, second) {
    if (numInvocations < lim) {
      numInvocations += 1;
      return binary(first, second);
    } else {
      return undefined;
    }
  }
}

// var add_ltd = limit(add, 1);
// add_ltd(3, 4);
// add_ltd(3, 5);

function from(int) {
  return function () {
    returnVal = int;
    int += 1;
    return returnVal;
  }
}

function to(genFunc, endVal) {
  return function () {
    currentVal = genFunc();
    if (currentVal < endVal) {
      return currentVal;
    }
    return undefined;
  }
}

function fromTo(start, end) {
  return to(from(start), end);
}

function element(arr, genFunc) {
  return function () {
    if (!genFunc) genFunc = fromTo(0, arr.length);
    index = genFunc();
    if (index !== undefined) {
      return arr[index];
    }
  }
}

function collect(genFunc, array) {
  return function () {
    retVal = genFunc();
    if (retVal !== undefined) array.push(retVal);

    return retVal;
  }
}

function filter(genFunc, predFunc) {
  return function () {
    do {
      currentGenVal = genFunc();
      if (predFunc(currentGenVal)) return currentGenVal;
    } while (currentGenVal)
  }
}

fil = filter(fromTo(10, 16), function third(value) {
  return (value % 5) === 0;
});

