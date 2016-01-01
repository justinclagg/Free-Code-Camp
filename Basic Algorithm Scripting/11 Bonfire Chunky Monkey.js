/* 
Bonfire: Chunky Monkey
http://www.freecodecamp.com/challenges/bonfire-chunky-monkey

Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a multidimensional array.

Code by Justin Clagg
https://github.com/justinclagg
*/

function chunk(arr, size) {

  var i = 0;
  var chunkArr = [];    // Multidimensional array consisting of each sliced array
  
  for (i = 0; i < arr.length; i + size) {
    // Splice an array of length size and add it to chunkArr
    chunkArr.push(arr.splice(i, i + size));
  }
  return chunkArr;
}

chunk([0, 1, 2, 3, 4, 5, 6], 3);
