/* 
Bonfire: Mutations
http://www.freecodecamp.com/challenges/bonfire-mutations

Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters 
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" 
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in 
"line" are present in "Alien".

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function mutation(arr) {

	var firstWord = arr[0].toLowerCase();
	var secondWord = arr[1].toLowerCase();
	var secondArr = [...secondWord];
	var index;

	// Check if each letter in the second word appears in the first word
	for (let i = 0; i < secondArr.length; i++) {
		index = firstWord.indexOf(secondArr[i]);
		// If any letter is not found, return false
		if (index === -1) {
			return false;
		}
	}
	// Otherwise return true (all letters were found)
	return true;
}

mutation(["hello", "hey"]);