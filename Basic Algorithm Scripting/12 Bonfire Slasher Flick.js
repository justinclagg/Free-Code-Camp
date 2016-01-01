/* 
Bonfire: Slasher Flick
http://www.freecodecamp.com/challenges/bonfire-slasher-flick

Return the remaining elements of an array after chopping off n elements from the head.
The head meaning the beginning of the array, or the zeroth index

Code by Justin Clagg
https://github.com/justinclagg
*/

function slasher(arr, howMany) {

    // .splice() modifies arr itself, removing howMany elements
    arr.splice(0, howMany);
  
    return arr;
}

slasher([1, 2, 3], 2);