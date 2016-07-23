/* 
Sum All Odd Fibonacci Numbers
https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

Return the sum of all odd Fibonacci numbers up to and including 
the passed number if it is a Fibonacci number.

Code by Justin Clagg
https://github.com/justinclagg
*/

function sumFibs(num) {

	var i, k;
	var fibArr = [0, 1];	// Initalize the Fibonacci array with the first two elements	
	var sum = 1; 			// Sum the first two Fibonacci numbers

	// Create an array of Fibonacci numbers
	for (i = 1; fibArr[i] <= num; i++) {
		fibArr[i + 1] = fibArr[i] + fibArr[i - 1];
		// Sum the odd Fibonacci numbers that are less than or equal to num
		if (fibArr[i + 1] % 2 === 1 && fibArr[i + 1] <= num) {
			sum += fibArr[i + 1];
		} 
	}

	return sum;
}

sumFibs(1);
