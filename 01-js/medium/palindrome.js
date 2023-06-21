/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isPalindrome(str) {
  str=str.replace(/[^\w]|_/g, '').toLowerCase();
  rev=str.split('').reverse().join('');
  console.log(rev);
  return str === rev;
}

module.exports = isPalindrome;
