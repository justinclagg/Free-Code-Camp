/* 
Bonfire: Sum All Numbers in a Range
http://www.freecodecamp.com/challenges/bonfire-sum-all-numbers-in-a-range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Code by Justin Clagg
https://github.com/justinclagg
*/

function sumAll(arr) {
  
    var i, sum = 0;
    // Minimum number in array 
    var minNum = Math.min.apply(null, arr);  //(applies Math.min to each element in arr)                      
    var maxNum = Math.max.apply(null, arr);  // Max number in array
  
    // Find the sum of each integer in the range [minNum, maxNum] (inclusive)
    for (i = minNum;  i <= maxNum; i++) {
      
        sum += i;
    }
  
    return sum;
}

sumAll([1, 4]);
