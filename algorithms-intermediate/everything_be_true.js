/* 
Everything Be True
https://www.freecodecamp.com/challenges/everything-be-true

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Code by Justin Clagg
https://github.com/justinclagg
*/

function truthCheck(collection, pre) {
	for (var i = 0; i < collection.length; i++) {
		// If the value of property pre for object collection[i] evaluates as falsy, return false
		if (!collection[i][pre]) {
			return false;
		}
	}
	// Otherwise each object has a defined, nonzero value for the property pre
	return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, 
			{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
