/* Bonfire: Title Case a Sentence
http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function titleCase(str) {
	// Make sure each word is lowercase
	var words = str.toLowerCase().split(" ");
	// Replace the letter at the beginning of each word
	words.forEach((word, i) => {
		words[i] = word.replace(/^\D/, match => match.toUpperCase());
	});

	return words.join(" ");
}

titleCase("I'm a little tea pot");