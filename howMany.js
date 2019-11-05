function countOccurrences(arr) {
  function logOccurrences(obj) {
    for (type in obj) {
      console.log(`${type} => ${obj[type]}`);
    }
  }

  typeCount = {};

  arr.forEach(type => {
    if (typeCount[type]) {
      typeCount[type] += 1;
    } else {
      typeCount[type] = 1;
    }
  });

  logOccurrences(typeCount);
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);