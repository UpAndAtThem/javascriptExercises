// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, 
// and returns a string representing that angle in degrees, minutes, and seconds. You should use a 
// degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote 
//   (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

function dms(angle) {
  function formatMS(unit) {
    var unitStr = String(Math.floor(unit));

    return unitStr.length == 1 ? '0' + unitStr : unitStr;
  }

  var degree = '\u00B0'
  var hours = Math.floor((360 + (angle % 360)) % 360);
  var minutes = Math.abs(60 * (angle % 1));
  var seconds = Math.abs(60 * (minutes % 1));


  return `${hours}${degree}${formatMS(minutes)}'${formatMS(seconds)}"`
}

