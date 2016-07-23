/* 
Smallest Common Multiple
https://www.freecodecamp.com/challenges/smallest-common-multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

Code by Justin Clagg
https://github.com/justinclagg
*/

// Finds the greatest common divisor of two numbers using The Euclidean algorithm
function gcd(a, b) {
	var max = Math.max(a, b);
	var min = Math.min(a, b);
	var remainder = max % min;
	if (remainder === 0) {
		return min;
	} else {
		return gcd(min, remainder);
	}
}

// Finds the least common multiple of two numbers by reduction of the greatest common divisor
function lcm(a, b) {
	var GCD = gcd(a, b);
	var LCM = a / GCD * b;
	return LCM;
}

// Finds the least common multiple for a range of numbers
function smallestCommons(arr) {
	var rangeArr = [];
	var LCM = 0;
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);	
	// Create an array for the range [min, max]
	for (var i = min; i <= max; i++) {
		rangeArr.push(i);
	}
	// Find the least common multiple of the range, using the fact that the LCM is associative
	LCM = lcm(rangeArr[0], rangeArr[1]);
	for (var k = 2; k < rangeArr.length; k++) {
		LCM = lcm(LCM, rangeArr[k]);
	}
	return LCM;
}

smallestCommons([1,13]);
