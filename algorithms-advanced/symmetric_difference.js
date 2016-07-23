/*
Symmetric Difference
https://www.freecodecamp.com/challenges/symmetric-difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is
the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).

Code by Justin Clagg
https://github.com/justinclagg
*/

function sym() {
	"use strict";

	// Returns true if a value is not found in a given array (this)
	function findUnique(val) {
		return this.indexOf(val) === -1;
	}

	// Copy the arguments object to an array
	var args = [];
	for (var i = 0; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	
	var symDiff = [];
	symDiff = args.reduce(function(preVal, curVal) {
		// Filter each array against the other, keeping unique values
		var filtPreVal = preVal.filter(findUnique, curVal);
		var filtCurVal = curVal.filter(findUnique, preVal);
		// Concatenate each filtered array, and remove duplicate values
		var concatArr = filtPreVal.concat(filtCurVal);
		var subSymDiff = [];
		concatArr.map(function(val) {
			// Add each unique value from concatArr to subSymDiff
			if (subSymDiff.indexOf(val) === -1) {
				subSymDiff.push(val);
			}
		});
		return subSymDiff;
	});
	return symDiff;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
