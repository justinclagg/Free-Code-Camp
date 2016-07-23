/* 
Bonfire: Where do I belong
http://www.freecodecamp.com/challenges/bonfire-where-do-i-belong


Return the lowest index at which a value (second argument) should be inserted into
an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will
look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Code by Justin Clagg
https://github.com/justinclagg
*/

function where(arr, num) {

    var i;
    var lowIndex = 0;    // lowest index that num could be inserted
  
    // Sort the array from smallest to largest
    arr.sort(function(a, b) {
        return a - b; 
    });
  
    // Check each sorted element until arr[i] is larger than num
    for (i = 0; i < arr.length; i++) {
      
        if (arr[i] < num) {
            // lowIndex must be set after an element lower than num
            lowIndex = i + 1;
        } else {
            // The for loop ends when arr[i] >= num
            return lowIndex;
        }
    }
  
    // Returns if no elements are larger than num
    return lowIndex;
}

where([2, 5, 10], 15);
