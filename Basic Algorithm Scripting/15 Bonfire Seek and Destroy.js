/* 
Bonfire: Seek and Destroy
http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy

You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.

Code by Justin Clagg
https://github.com/justinclagg
*/

function destroyer(arr) {
  
    var i = 0; 
    var filtArr = arr;   // Create a copy of the initial array to be filtered
  
    // Remove a given value arg from an array arr
    function removeArg(arr, arg) {
        
        arr = arr.filter(function (val) {
            return val !== arg;    // Returns false for values of arr that are equal to arg, removing them
        });
      
        return arr;
    }
      
    // Call the removeArg function once for each extra argument
    // Skip the first argument, which is arr
    for (i = 1; i < arguments.length; i++) {    // arguments.length is the number of arguments passed
        
        filtArr = removeArg(filtArr, arguments[i]);
    }

    return filtArr;
}

// Extra arguments can be passed, even though the function only asks for one
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
