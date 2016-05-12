/* 
Pig Latin
https://www.freecodecamp.com/challenges/pig-latin

Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.

Code by Justin Clagg
https://github.com/justinclagg
*/


function translatePigLatin(str) {
  
    // Determine the index of the first vowel in str
    var regex = /[aeiou]/i;
    var result = regex.exec(str);
    var vowelIndex = result.index;
      
    // Place each letter of the string into an array
    var strArray = str.split('');
  
    // Add "way" to the end if index 0 contains a vowel
    if (vowelIndex === 0) {
        return (strArray.join('') + "way");
    // Otherwise remove the leading consonants and add them to the end of the array
    } else {
        for (var i = 0; i < vowelIndex; i++) {
            strArray.push(strArray.shift()); 
        }
        return (strArray.join('') + "ay");
    } 
}

translatePigLatin("california");
