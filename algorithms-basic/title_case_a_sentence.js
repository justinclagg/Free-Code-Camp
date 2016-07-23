/* Bonfire: Title Case a Sentence
http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Code by Justin Clagg
https://github.com/justinclagg
*/

function titleCase(str) {
  
    var i = 0;            
    var lowerArray = [];  // Array of lowercase words
    var tempArray = [];   // Contains the letters of each word
    var titleArray = [];  // Array of title case words
    var titleStr = "";    // Title case version of original string
  
    // Make all letters lowercase
    str = str.toLowerCase();
  
    // Split the string to create an array of words
    lowerArray = str.split(" ");
  
    // Title case each word in the array
    for (i = 0; i < lowerArray.length; i++) {
        // Split the word and add it to a new array
        tempArray = lowerArray[i].split("");
        // Capitalize the first letter in the word
        tempArray[0] = tempArray[0].toUpperCase();
        // Add the capitalized word to a new array
        titleArray[i] = tempArray.join("");
    }
    // Create a new string by joining wordArray
    titleStr = titleArray.join(" ");
  
    return titleStr;
}

titleCase("I'm a little tea pot");
