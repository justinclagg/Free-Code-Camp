/* 
Sum All Primes
https://www.freecodecamp.com/challenges/sum-all-primes

Sum all the prime numbers up to and including the provided number.

Code by Justin Clagg
https://github.com/justinclagg
*/

// Returns true if n is prime
function testPrime(n) {

	// Test if n is divisible by 2 or 3; Return true if n=2 or n=3
	if (n % 2 === 0) {
		return n === 2;
	} 
	if (n % 3 === 0) {
		return n === 3;
	}

	// Test the odd factors greater than 3; Factors beyond sqrt(n) are unnecessary
	for (var i = 5; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) {
			return false;
		}
	}

	// n is prime if previous tests did not return false
	return true;
}

// Creates an array of prime numbers between 0 and num, returning their sum
function sumPrimes(num) {
  
	var sum = 0;
	var primeArr = [];

	// Test if the input is valid
	if (num < 2 || isNaN(num)) {
		return "Please enter a number greater than or equal to 2.";
	}

	// Create an array of prime numbers in the range 2 to num
	for (var count = 2; count <= num; count++) {
		if (testPrime(count) === true) {
			primeArr.push(count);
		}
	}
	
	// Sum the prime numbers in the array
	sum = primeArr.reduce(function(prevVal, currVal) {
		return prevVal + currVal;
	});

	return sum;
}

sumPrimes(17);
