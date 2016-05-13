/* 
Sorted Union
https://www.freecodecamp.com/challenges/sorted-union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

Code by Justin Clagg
https://github.com/justinclagg
*/

function uniteUnique(nArrays) {

  var uniqArr = arguments[0];
  // Combine all argument arrays using push.apply()
  // (more efficient than looping through each element)  
  for (var i = 1; i < arguments.length; i++) {
    uniqArr.push.apply(uniqArr, arguments[i]);
  }

  for (var k = 0; k < uniqArr.length; k++) {
  // Remove all element matches that come after the first occurance  
    while (uniqArr.lastIndexOf(uniqArr[k]) > k) {  
      uniqArr.splice(uniqArr.lastIndexOf(uniqArr[k]), 1);  
    }
  }
  
  return uniqArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
