/* 
Bonfire: Search and Replaced
http://www.freecodecamp.com/challenges/search-and-replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Code by Justin Clagg
https://github.com/justinclagg
*/

function myReplace(str, before, after) {
    
    // Create a regular expression object /before/gi
    var replaceExp = new RegExp(before, 'gi');
  
    // Make the replacement word (after) match the capitalization of the before word (match)
    function matchCase(match) {
      
       // Convert after to an array of letters so that it can be modified
       // Note: strings are immutable, making the format change necessary
       var afterArr = after.split("");
      
       // Make after and match have the same first letter case
       if (after[0] === after[0].toUpperCase() && match[0] === match[0].toLowerCase()) {
         
            afterArr[0] = afterArr[0].toLowerCase();
            return afterArr.join("");
            
        } else if (after[0] === after[0].toLowerCase() && match[0] === match[0].toUpperCase()) {
          
            afterArr[0] = afterArr[0].toUpperCase();
            return afterArr.join("");
        }
        // If after and match were already the same case, return after unmodified
        return after;
    }
    
    // Replace all instances of before with after (modified by the matchCase function)
    return str.replace(replaceExp, matchCase);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
