/* 
DNA Pairing
https://www.freecodecamp.com/challenges/dna-pairing

The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.

Code by Justin Clagg
https://github.com/justinclagg
*/

function pairElement(str) {
  
  // Store each base in an array element, making sure they are capitalized
  var strArr = str.toUpperCase().split('');
  // Array of base pair arrays
  var pairArr = [];

  for (var i = 0; i < strArr.length; i++) {
  // Add an array of each base pair to the end of pairArr
    switch (strArr[i]) { 
    case "A":
      pairArr.push([strArr[i], "T"]);
      break;
    case "T":
      pairArr.push([strArr[i], "A"]);
      break;
    case "C":
      pairArr.push([strArr[i], "G"]);
      break;
    case "G":
      pairArr.push([strArr[i], "C"]);
      break;
    }  
  }
  return pairArr;
}

pairElement("GCG");
