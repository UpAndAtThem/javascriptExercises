// function identityf(obj) {
//   return function() {
//     return obj;
//   }
// }

// identityf(3)()


function add(...numbers) {
  return numbers.reduce((num, accum) => num + accum, 0);
}



function applyf(f) {
  return function (x) {
    return function(y) {
      return add(x, y);
    }
  }
}

applyf(add)(3)(4);
