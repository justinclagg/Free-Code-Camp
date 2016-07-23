/* 
Arguments Optional
https://www.freecodecamp.com/challenges/arguments-optional

Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.

If either argument isn't a valid number, return undefined.

Code by Justin Clagg
https://github.com/justinclagg
*/

function addTogether() {
	
	var arg1 = arguments[0];
	var arg2 = arguments[1];
	var savedArg;

	// Test if a given argument is a valid number
	function validNum(arg) {
		return ((typeof arg === "number") && !isNaN(arg));
	}

	// Returned by addTogether() when one valid number is given
	// If an additional valid number is passed to getArg, return the sum
	function getArg(arg) {
		if (validNum(arg)) {
			return (savedArg + arg);
		} else {
			return undefined;
		}
	}

	// If two valid numbers are given, return their sum
	if ((arguments.length === 2) && validNum(arg1) && validNum(arg2)) {
		return (arg1 + arg2);
	// If one valid number is given, save that number and return the getArg function
	} else if ((arguments.length === 1) && validNum(arg1)) {
		savedArg = arg1;
		return getArg;
	} else {
		return undefined;
	}
}

addTogether(2)(2);
