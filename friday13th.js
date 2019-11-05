function fridayThe13ths(year) {
  var NUMBER_MONTHS = 12;
  var friday13Count = 0;
  var dateObj = new Date(`January 13, ${year}`);

  for (month = 0; month < NUMBER_MONTHS; month += 1) {
    dateObj.setMonth(month, 13);

    if (dateObj.getDay() == 5) friday13Count += 1;
  }

  return friday13Count;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

// friday13thIndex = {};

// for(year = 1794; year < 2020; year += 1) {
//   friday13thIndex[year] = fridayThe13ths(year);
// }

// newVal = Object.values(friday13thIndex);

// console.log(friday13thIndex);
// console.log(newVal.sort()[newVal.length - 1]);