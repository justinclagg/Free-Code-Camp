/* 
Validate US Telephone Numbers
https://www.freecodecamp.com/challenges/validate-us-telephone-numbers

Return true if the passed string is a valid US phone number.
The user may fill out the form field any way they choose as long as it is a valid US number.
If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.

Code by Justin Clagg
https://github.com/justinclagg
*/

function telephoneCheck(str) {
	"use strict";
	// Remove spaces from given string
	str = str.replace(/\s+/g, "");
	// Allow the following formats for valid US numbers
	if (/^\d\d\d\d\d\d\d\d\d\d$/.test(str) ||
		/^\d\d\d\-\d\d\d\-\d\d\d\d$/.test(str) ||
		/^1\d\d\d\d\d\d\d\d\d\d$/.test(str) ||
		/^1\d\d\d\-\d\d\d\-\d\d\d\d$/.test(str) ||
		/^\(\d\d\d\)\d\d\d\d\d\d\d$/.test(str) ||
		/^\(\d\d\d\)\d\d\d\-\d\d\d\d$/.test(str) ||
		/^1\(\d\d\d\)\d\d\d\d\d\d\d$/.test(str) ||
		/^1\(\d\d\d\)\d\d\d\-\d\d\d\d$/.test(str))
	{
		return true;
	}
	// Otherwise the string is not a valid US number
	return false;
}

telephoneCheck("-1 (757) 622-7382");
