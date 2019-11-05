function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

function isRealPalindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '');
  return isPalindrome(str.toLowerCase());
}

function isPalindromicNumber(int) {
  return isPalindrome(String(int));
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true