/* 
Finders Keepers
https://www.freecodecamp.com/challenges/finders-keepers

Create a function that looks through an array (first argument) and returns 
the first element in the array that passes a truth test (second argument).

Code by Justin Clagg
https://github.com/justinclagg
*/

function findElement(arr, func) {
	// Returns the first element in arr that satisfies func
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i]) === true) {
			return arr[i];
		}
	}
	// Return undefined if no elements satisfy func
	return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
