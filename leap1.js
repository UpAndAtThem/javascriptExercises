// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, 
// unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, 
// unless the year is also evenly divisible by 400.

function isLeapYear(year) {
  let divisibleBy4 = (year % 4 == 0);
  let divisibleBy100 = (year % 100 == 0);
  let divisibleBy400 = (year % 400 == 0);

  if (year < 1752) {
     console.log(divisibleBy4);
  } else {
    console.log(divisibleBy400 || (divisibleBy4 && !divisibleBy100));
  }
  
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true