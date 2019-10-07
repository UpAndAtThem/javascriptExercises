century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

function century(year) {
  var suffix = function() {
    var s = ['th', 'st', 'nd', 'rd'];
    return function(n) {
      var d = (n|0)%100;
      return d > 3 && d < 21 ? 'th' : s[d%10] || 'th';
    }
  };

  if (year % 10 != 0) { year += 100 }

  var cent = parseInt(year / 100);
  
  console.log(String(cent) + suffix(cent));
}

