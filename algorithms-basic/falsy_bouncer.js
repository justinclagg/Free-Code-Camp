/* 
Bonfire: Falsy Bouncer
http://www.freecodecamp.com/challenges/bonfire-falsy-bouncer

Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Code by Justin Clagg
https://github.com/justinclagg
*/

"use strict";

function bouncer(arr) {
	// Falsy values will coerce to false in the filter function
	return arr.filter(val => val);
}

bouncer([7, "ate", "", false, 9]);