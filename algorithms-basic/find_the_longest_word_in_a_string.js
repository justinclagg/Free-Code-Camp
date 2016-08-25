/* Bonfire: Find the Longest Word in a String 
http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string

Return the length of the longest word in the provided sentence.
Your response should be a number.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function findLongestWord(str) {

	var words = str.split(" ");
	var longest = 0;
	
	// Determine which word has the longest length
	words.forEach((word) => {
		if (word.length > longest) {
			longest = word.length;
		}
	});

	return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");