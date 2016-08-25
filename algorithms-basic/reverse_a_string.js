/* Bonfire: Reverse a String 
http://www.freecodecamp.com/challenges/bonfire-reverse-a-string

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function reverseString(str) {
	var reverseArr = [...str].reverse();
	return reverseArr.join("");
}

reverseString("hello world");