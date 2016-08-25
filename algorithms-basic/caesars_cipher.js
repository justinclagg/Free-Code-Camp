/* 
Bonfire: Caesars Cipher
http://www.freecodecamp.com/challenges/bonfire-caesars-cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters
will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function rot13(encodedStr) {

	const shift = 13; // Shift each letter by 13 places
	var charVal = 0;
	var decodedArr = [];

	// Ensure the input is upper case
	encodedStr = encodedStr.toUpperCase();
	// Split the input into an array
	var encodedArr = [...encodedStr];

	for (let i = 0; i < encodedArr.length; i++) {
		// Get each Unicode value
		charVal = encodedArr[i].charCodeAt(0);
		// Shift capital letters
		if (charVal >= 65 && charVal <= 90) {
			decodedArr[i] = (charVal + shift - 65) % 26 + 65;
		}
		// Copy all other characters unchanged
		else {
			decodedArr[i] = charVal;
		}
	}
	
	return String.fromCharCode(...decodedArr);
}

// Enter the encoded string below
rot13("SERR PBQR PNZC!");