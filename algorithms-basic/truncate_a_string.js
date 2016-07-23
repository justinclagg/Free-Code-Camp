/* 
Bonfire: Truncate a string
http://www.freecodecamp.com/challenges/bonfire-truncate-a-string

Truncate a string (first argument) if it is longer than the given maximum string
length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the num is less than or equal to 3, then the length of the three dots is
not added to the string length.

Code by Justin Clagg
https://github.com/justinclagg
*/

function truncate(str, num) {

    truncStr = "";    // Truncated version of the input string
  
    if (num < 0) {    // num must be positive
        return "Please enter a non-negative number.";
      
    } else if (num >= str.length) {    // str doesn't need to be truncated
        truncStr = str;
      
    } else if (num <= 3) {    // truncate, but don't include ellipsis in string length
        // .slice() does not include the end point
        truncStr = str.slice(0, num) + "...";
      
    } else {    // truncate, including ellipsis in string length
        truncStr = str.slice(0, num - 3) + "...";
    }
  
    return truncStr;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
