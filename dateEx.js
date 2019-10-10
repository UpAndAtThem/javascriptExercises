function dateSuffix(dateInt) {
  if (dateInt > 3 && dateInt < 21) { return 'th'; }
  
  switch (dateInt % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var day = date.getDay();
  var suffix = dateSuffix(day);

  return daysOfWeek[day];
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();

  return months[month];
}

function formattedDate(date) {
  dateInt = date.getDate();

  return String(dateInt) + dateSuffix(dateInt);
}

function dateMessage(date) {
  var day = formattedDay(date);
  var date = formattedDate(date);
  var month = formattedMonth(date);
  var year = date.getFullYear();

  return `Today is ${day}, the ${date} of ${month} in the year ${year}`
}

function formatTime(date) {
  hours = String(date.getHours());
  minutes = String(date.getMinutes());

  if (minutes.length === 1) { minutes = '0' + minutes; }
  if (hours.length === 1) { hours = '0' + hours; }

  return `${hours}:${minutes}`
}

