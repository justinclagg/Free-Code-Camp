/* 
Bonfire: Return Largest Numbers in Arrays
http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function largestOfFour(arr) {

	var largestArray = []; // Contains the largest number from each sub-array
	var largestNum = 0; // Current largest number

	for (let i = 0; i < arr.length; i++) {
		largestNum = arr[i][0];
		// Record the largest number in the sub-array
		for (let k = 1; k < arr[i].length; k++) {
			if (arr[i][k] > largestNum) {
				largestNum = arr[i][k];
			}   
		}
		largestArray[i] = largestNum;
	}
	
	return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);