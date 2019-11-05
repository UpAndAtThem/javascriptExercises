// function Person(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
//   this.greeting = (name) => {
//     console.log(`Hello, ${name}. My name is ${this.name}.`);
//   }
// };


// var jason = new Person('Jason', 34, 'jasonn318@gmail.com');

// var apples = 3;
// var bananas = 3;
// var areEqual = apples === bananas;

// if (apples === bananas) {
//   console.log('Same value and type: Strictly Equal');
// } else {
//   if (apples == bananas) {
//     console.log('Same value different type: Not Strictly Equal');
//   } else {
//     console.log('Not equal');
//   }
// }


// [1,2,3,4,5].reduce((num, accum) => {
//   return accum + num;
// }, 0)

// [10,20,30].reduce(function(elem, accum){
//   return elem + accum;
// }, 0);

// var foo = 1;

// foo = function foo() {}

// console.log(foo);

// Write a function named unshift that accepts two arguments: an Array and a value. 
// The function should insert the value at the beginning of the Array, and return 
// the new length of the array. You will need a for loop for this problem.

// function unshift(arr, newVal) {
//   var tmp = newVal;
//   arr[0] = newVal;
//   arrLength = arr.length;

//   for (var i = 1; i < arrLength; i += 1) {
//     tmp = arr[i];
//     arr[i] = tmp;
//   }

//   console.log(arr);
// }

// var count = [1, 2, 3, 4, 5, 6];
// unshift(count, 110);      // 4
// count;                  // [ 0, 1, 2, 3 ]

// function addCereal() {
//   var obj = document.getElementById('random_list');
//   var li = document.createElement('li')
//   li.textContent = 'Cereal';

//   obj.appendChild(li)
// }

// document.getElementById('list').append(obj);

// function shift(arr) {
//   var shiftedVal = arr[0];

//   for(let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i + 1]
//   }

//   arr.length = arr.length - 1;

//   return shiftedVal;
// }

// var x = [10, 23, 4, 12, 99];
// shift(x);

// console.log(x);

// Write a function indexOf that accepts two arguments: an array and a value. 
// The function returns the first index at which the value can be found, or -1 
// if the value is not present.

// function indexOf(arr, value) {
//   for(let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === value) return i;
//   }
//   return -1;
// }


// slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
// slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

// function concat(...arrays) {
//   var resultArr = [];

//   arrays.forEach((arr, i) => {
//     arr.forEach(elem => {
//       resultArr.push(elem);
//     });
//   })

//   return resultArr;
// }

// concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);       // [ 1, 2, 3, 4, 5, 6 ]

// function range(start, end) {
//     if(start === end) return [start];
//     return [start, ...range(start + 1, end)];
// }

// range(1, 100);


// Write a function named objectHasProperty that takes two arguments: an Object and a String. 
// The function should return true if the Object contains a property with the name given by the String, false otherwise.
// function objectHasProperty(obj, propName) {
//   for (propN in obj) { if (propN === propName) return true; }
//   return false;
// }

// var pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// objectHasProperty(pets, 'dog');       // true
// objectHasProperty(pets, 'lizard');    // false
// objectHasProperty(pets, 'mice');      // true
// function copyProperties(originalObj, copy) {
//   var propCount = 0;

//   for (propN in originalObj) {
//     copy[propN] = originalObj[propN];
//     propCount += 1;
//   }

//   return propCount;
// }

// var hal = {
//   model: 9000,
//   enabled: true,
// };

// var sal = {};
// copyProperties(hal, sal);  // 2
// sal;                       // { model: 9000, enabled: true }

function wordCount(string) {
  function incrementWordCount(obj, words) {
    words.forEach(word => {
      obj[word] ? obj[word] += 1 : obj[word] = 1;
    });

    return obj; 
  }

  var wordTally = {};
  var words = string.split(" ");

  incrementWordCount(wordTally, words);


  return wordTally;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }

function count(arr, word) {
  var count = 0;

  arr.forEach(outcome => {
    if (outcome === word) count += 1;
  });

  return count;
}

