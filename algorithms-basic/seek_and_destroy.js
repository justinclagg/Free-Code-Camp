/* 
Bonfire: Seek and Destroy
http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy

You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function destroyer(arr, ...remove) {
	// For each argument passed after arr, remove all occurances of it within arr
	remove.forEach(arg => {
		arr = arr.filter(val => arg !== val);
	});

	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);