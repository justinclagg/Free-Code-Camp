/* 
Bonfire: Mutations
http://www.freecodecamp.com/challenges/bonfire-mutations

Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters 
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" 
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in 
"line" are present in "Alien".

Code by Justin Clagg
https://github.com/justinclagg
*/

function mutation(arr) {

    var i, indexVal = 0;
    var firstStr = "";    // Holds the first word
    var secondArr = [];   // Holds the second word, split by letter in an array
  
    //Remove case dependency and assign first word to a string
    firstStr = arr[0].toLowerCase();
    // Split second word at each letter and assign to an array
    secondArr = arr[1].toLowerCase().split("");

    // Check if each letter in the second word appears in the first word
    for (i = 0; i < secondArr.length; i++) {
        // .indexOf() returns -1 if a letter from secondArr is not in firstStr
        indexVal = firstStr.indexOf(secondArr[i], 0);
        // If a letter is not found, return false
        if (indexVal === -1) {
            return false;
        }
    }
    // Otherwise return true (all letters were found)
    return true;
}

mutation(["hello", "hey"]);
