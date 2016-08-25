/* Bonfire: Factorialize a Number 
http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number

Return the factorial of the provided integer.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function factorialize(num) {

	if (num < 0) {
		return "You must select a positive integer.";
	}
	else if (num === 0) {
		return 1;
	} 
	else {
		var factorial = 1;

		for (let i = 2; i <= num; i++) {
			factorial *= i;
		}

		return factorial;
	}
}

factorialize(6);