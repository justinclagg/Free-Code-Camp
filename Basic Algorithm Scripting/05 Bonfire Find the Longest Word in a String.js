/* Bonfire: Find the Longest Word in a String 
http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string

Return the length of the longest word in the provided sentence.
Your response should be a number.

Code by Justin Clagg
https://github.com/justinclagg
*/

function findLongestWord(str) {
  // Create an array of the words in the string.
  var strArray = str.split(' ');
  // Convert each word into its length value.
  strArray = strArray.map(function(val){
    val = val.length;
    return val;
  });
  // Sort the length numbers from largest to smallest.
  strArray = strArray.sort(function(a, b) {
    return b - a;
  });
  // The first element of the array will be the longest length. 
  return strArray[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
