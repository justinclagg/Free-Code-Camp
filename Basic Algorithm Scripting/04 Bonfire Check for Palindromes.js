/* Bonfire: Check for Palindromes 
http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Code by Justin Clagg
https://github.com/justinclagg
*/

function palindrome(str) {
  // Remove all capitalization
  str = str.toLowerCase();
  // Remove everything except letters. \s+ - whitespace | \W+ - symbols | _ underscore is considered alphanumeric must be removed separately
  str = str.replace(/[\s+ \W _]/g, '');
  // Define bwStr as the reverse of str.
  var bwStr = str.split('').reverse().join('');
  // Check if str is the same backwards.
  return str === bwStr;
}


palindrome("0_0 (: /-\ :) 0-0");

