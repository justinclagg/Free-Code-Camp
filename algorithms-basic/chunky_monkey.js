/* 
Bonfire: Chunky Monkey
http://www.freecodecamp.com/challenges/bonfire-chunky-monkey

Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a multidimensional array.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function chunk(arr, size) {

	var chunkArr = []; // Multidimensional array consisting of each sliced array

	// Copy arrays of length size and push to chunkArr
	for (let i = 0; i < arr.length; i += size) {
		chunkArr.push(arr.slice(i, i + size));
	}

	return chunkArr;
}

chunk([0, 1, 2, 3, 4, 5, 6], 3);