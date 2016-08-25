/* 
Bonfire: Truncate a string
http://www.freecodecamp.com/challenges/bonfire-truncate-a-string

Truncate a string (first argument) if it is longer than the given maximum string
length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the max is less than or equal to 3, then the length of the three dots is
not added to the string length.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function truncate(str, max) {
	// Invalid input
	if (max < 0) {
		return "Please enter a non-negative maxber.";
	}
	// No truncation needed
	else if (max >= str.length) {
		return str;
	}
	// Truncate, don't include ellipsis in length
	else if (max <= 3) {
		return str.slice(0, max) + "...";
	}
	// Truncate and include ellipsis in length
	else {
		return str.slice(0, max - 3) + "...";
	}
}

truncate("A-tisket a-tasket A green and yellow basket", 11);