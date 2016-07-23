/* 
Bonfire: Diff Two Arrays
http://www.freecodecamp.com/challenges/bonfire-diff-two-arrays

Compare two arrays and return a new array with any items only found in one of the original arrays.

Code by Justin Clagg
https://github.com/justinclagg
*/

function diff(arr1, arr2) {
  
    var uniqArr, filtArr1, filtArr2 = []; 
    
    // Checks if a given array element is unique within the array
    // Used as a callback function for .filter()
    function findUnique(val) {
        // Checks the array given as a filter argument (this) for values of the
        // array being filtered. Removes values that aren't unique.
        return this.indexOf(val) === -1;
    }
  
    // Filter out elements of arr1 that are in arr2
    filtArr1 = arr1.filter(findUnique, arr2);
  
    // Filter out elements of arr2 that are in arr1
    filtArr2 = arr2.filter(findUnique, arr1);
  
    // Combine the unique, filtered arrays
    uniqArr = filtArr1.concat(filtArr2);

    return uniqArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
