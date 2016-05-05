/* Bonfire: Factorialize a Number 
http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number

Return the factorial of the provided integer.

Code by Justin Clagg
https://github.com/justinclagg
*/

function factorialize(num) {
  
    var total = 1;
  
    if (num < 0) {   
        return "You must select a positive integer.";
    
    } else if (num === 0) {  
        return 1;
    
    } else {  

        for (var i = 1; i <= num; i++) {
            total *= i;
        }
        return total;
    } 
}

factorialize(6);