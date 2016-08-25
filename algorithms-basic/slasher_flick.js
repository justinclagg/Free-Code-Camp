/* 
Bonfire: Slasher Flick
http://www.freecodecamp.com/challenges/bonfire-slasher-flick

Return the remaining elements of an array after chopping off n elements from the head.
The head meaning the beginning of the array, or the zeroth index

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function slasher(arr, howMany) {
	return arr.slice(howMany);
}

slasher([1, 2, 3], 2);