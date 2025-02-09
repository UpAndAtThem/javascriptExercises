// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 
// If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time 
// is before midnight.

// The two functions below do the reverse of the previous exercise. They take a 24-hour time argument and return the 
// number of minutes before or after midnight, respectively. Both functions should return a value between 
// 0 and 1439 (inclusive). Refactor the functions using the Date object.

// Examples:

// Note: Disregard Daylight Saving Time, Standard Time, and other irregularities.

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var timeComponents = timeStr.split(':');
  var hours = parseInt(timeComponents[0], 10);
  var minutes = parseInt(timeComponents[1], 10);

  var date = new Date();
  date.setMinutes();
  
  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));  // 0
console.log(afterMidnight('12:34')); // 754
console.log(beforeMidnight('12:34'));  // 686