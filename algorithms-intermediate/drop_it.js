/* 
Drop it
https://www.freecodecamp.com/challenges/finders-keepers

Drop the elements of an array (first argument), starting from the front, 
until the predicate (second argument) returns true.

Return the rest of the array, otherwise return an empty array.

Code by Justin Clagg
https://github.com/justinclagg
*/

function dropElements(arr, func) {
	// Return a slice of arr, starting at the first element that satisfies func
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i]) === true) {
			return arr.slice(i);
		}
	}
	// If no element of arr satisfies func, return an empty array
	return [];	
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
