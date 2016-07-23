/* 
Steamroller
https://www.freecodecamp.com/challenges/steamroller

Flatten a nested array. You must account for varying levels of nesting.

Code by Justin Clagg
https://github.com/justinclagg
*/

function steamrollArray(arr, flatArr) {
	// Initalize flatArr as an empty array when steamrollArray is first called
	// Keep the previous value of flatArr when it is called recursively
	flatArr = flatArr === undefined ? [] : flatArr;
	
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
		// If arr[i] is an array, pass it to steamrollArray() until a non-Array element is found
			steamrollArray(arr[i], flatArr);
		} else {
			flatArr.push(arr[i]);
		}
	}
	return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
