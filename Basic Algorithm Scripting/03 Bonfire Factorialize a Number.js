/* Bonfire: Factorialize a Number 
http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number

Return the factorial of the provided integer.

Code by Justin Clagg
https://github.com/justinclagg
*/

function factorialize(num) {
  // Return the factorial of num
  var factorial = 1;
  for (var n = 2; n <= num; n++) {
    factorial *= n;
  }
  return factorial;
}

factorialize(1);