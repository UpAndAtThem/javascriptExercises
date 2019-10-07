// function twoDimensionalEven(multiArr) {
//   multiArr.forEach(function (arrElem) {
//     arrElem.forEach(function (elem) {
//       if (elem % 2 == 0) {
//         console.log(elem);
//       }
//     });
//   });
// }


// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// twoDimensionalEven(arr);

// mapParity = intArr => { 
//   return intArr.map(int => (int % 2 == 0) ? 'even' : 'odd');
// }


// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// console.log(mapParity(myArray));

// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]

// function removeNonInteger(arr) {
//   return arr.filter(elem => Number.isInteger(elem));
// }

// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let newArray = removeNonInteger(array);
// console.log(newArray); // => [1, 3, -4]

// function oddLengths(arr) {
//   lengths = arr.map( elem => elem.length );
//   console.log(lengths);
//   odds = lengths.filter( elem => (elem % 2 != 0));
//   console.log(odds);
// }


// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function threeCheck(arr) {
//   let hasThree = false;

//   arr.forEach(elem => {
//     if (elem === 3)
//       hasThree = true;
//   });

//   return hasThree;
// }

// let nums1 = [1, 3, 5, 7, 9, 11];
// let nums2 = [];
// let nums3 = [2, 4, 6, 8];

// console.log(threeCheck(nums1));
// console.log(threeCheck(nums2));
// console.log(threeCheck(nums3));

//
// let obj1 = {color: 'blue', age: 34};
// let obj2 = obj1;
// let obj3 = {};

// // console.log(obj1);
// // console.log(obj2);

// obj2.hello = 'world';
// obj2.foo = 'bar';

// // console.log(obj2);

// for(let prop in obj2) {
//   if (obj2.hasOwnProperty(prop)) {
//     console.log(obj2[prop]);
//   }
// }

// let myArray = {
//   0: 'Hello',
//   1: 'world',
//   2: 'I\'ve',
//   3: "been",
//   4: "waiting"
// }

// console.log(myArray);

// for (let i = 0; i < Object.values(myArray).length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let x = Object.keys(obj).map(elem => elem.toUpperCase());

// console.log(x);
// function copyObj(obj, keys = Object.keys(obj)) {
//   let res = {};
//   keys.forEach(key => res[key] = obj[key]);
//   return res;
// }

// let objToCopy = {
//   foo: 1,
//   bar: 2,
// };

// let newObj = copyObj(objToCopy);

// console.log(newObj.foo);    // => 1
// console.log(newObj.bar);    // => 2

// let newObj2 = copyObj(objToCopy, [ 'foo' ]);

// console.log(newObj2.foo);   // => 1
// console.log(newObj2.bar);   // => undefined

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);

// console.log(foo.b);
// console.log(qux);

// let numerator = 10;
// let denominator = 3;
// let answer = Math.floor(numerator/denominator);
// let incrementer = 1;
// let start = incrementer;
// let end;
// let difference;
// incrementer++;
// incrementer++;
// incrementer++;
// incrementer += 1;
// incrementer += 1;
// end = incrementer;
// difference = end - start;

// console.log(difference);
// answer = (11 + 31) * 3
// console.log(answer);

// Set a variable, apples, to 3. Set a second variable, bananas, to 5. 
// Write a conditional using == that checks whether apples is equal to bananas. 
// Log a message if true.

// let apples = 3;
// let arr = [1];
// let bananas = undefined;
// let areEqual = (apples === bananas);
// let eitherOr = (arr || bananas);

// console.log(eitherOr[0] = 3);

// console.log(arr);
// console.log(eitherOr);

// if (areEqual) { console.log("All equal ya'll"); }

// if (apples === bananas) {
//   console.log("apples are strictly equal to bananas");
// }
// else {
//   if (apples == bananas){
//     console.log("apples equal bananas");
//   } else {
//     console.log("apples and bananas are not equal");
//   }
// }

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
// var shoppingCart = [];

// // Currently available products with prices.
// var prices = {
//   'notebook': 9.99,
//   'pencil': 1.70,
//   'coffee': 3.00,
//   'smoothie': 2.10,
// };

// function price(item) {
//   return prices[item.name];
// }

// // Adding an item to the shopping cart.
// // The amount is optional and defaults to 1.
// // If the item is already in the cart, its amount is updated.
// function updateCart(name, amount = 1) {
//   var i;
//   var item;
//   var alreadyInCart = false;

//   for (i = 0; i < shoppingCart.length; i += 1) {
//     item = shoppingCart[i];

//     if (item.name === name) {
//       item.amount = amount;
//       alreadyInCart = true;
//       break;
//     }
//   }

//   if (!alreadyInCart) {
//     shoppingCart.push({ name: name, amount: amount });
//   }
// }

// // Calculating the price for the whole shopping cart.
// function total() {
//   var total = 0;
//   var i;

//   for (i = 0; i < shoppingCart.length; i += 1) {
//     var item = shoppingCart[i];

//     total += (item.amount * price(item));
//   }

//   return total.toFixed(2);
// }

// function pay() {
//   // omitted
//   console.log('You have been charged $' + total() + '.');
// }

// function checkout() {
//   pay();
//   shoppingCart = [];
// }

// // Example purchase.

// updateCart('notebook');
// updateCart('pencil', 2);
// updateCart('coffee', 1);
// // "Oh, wait, I do have pencils..."
// updateCart('pencil', 0);

// checkout();


// You have been charged $14.69.



function read() {
  
}

console.log(read());
