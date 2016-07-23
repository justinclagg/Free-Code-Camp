/* 
Missing Letters
https://www.freecodecamp.com/challenges/missing-letters

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Code by Justin Clagg
https://github.com/justinclagg
*/

function fearNotLetter(str) {

  var charDifference = 0;
  var missingChar = 0;
  
  for (var i = 1; i < str.length; i++) {
    // Store the character code difference between adjacent letters
    charCodeDiff = str.charCodeAt(i) - str.charCodeAt(i-1);
    // A difference of 2 means there is a missing letter in the sequence
    if (charCodeDiff === 2) {
      missingChar = str.charCodeAt(i) - 1;
      return String.fromCharCode(missingChar);
    }
  }
  // Return undefined if there are no missing letters
  return undefined;
}

fearNotLetter("abce");
