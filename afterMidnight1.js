// We can use the number of minutes before or after midnight to represent the time of day. 
// If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, 
// the time is before midnight.

// The timeOfDay function below takes a time argument using this minute-based format, and returns the 
// time of day in 24-hour format ("hh:mm"). Reimplement the function using JavaScript's Date object.

// Examples:

// Note: Disregard Daylight Saving Time, Standard Time, and other complications.


var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var OWN_MIDNIGHT = 24;
var PREV_MIDNIGHT = 0;

function timeOfDay(deltaMinutes) {
  var midnight = new Date();
  var hour;

  deltaMinutes >= 0 ? hour = OWN_MIDNIGHT : hour = PREV_MIDNIGHT;
  midnight.setHours(hour, 0, 0, 0)

  var hours;
  var minutes;

  deltaMinutes = deltaMinutes;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  midnight.setHours(hours, minutes)
  console.log(midnight.toString());
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}
