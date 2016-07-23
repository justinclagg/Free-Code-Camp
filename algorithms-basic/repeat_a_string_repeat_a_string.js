/* 
Bonfire: Repeat a string repeat a string
http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string

Repeat a given string (first argument) n times (second argument).
Return an empty string if n is a negative number.

Code by Justin Clagg
https://github.com/justinclagg
*/

function repeat(str, num) {

    var i = 0;
    var repeatStr = "";
  
    // If num is positive, add str to repeatStr num times
    if (num >= 0) {
        for (i = 0; i < num; i++) {
            repeatStr += str;
        }  
    }
    return repeatStr;
}

repeat("abc", 3);
