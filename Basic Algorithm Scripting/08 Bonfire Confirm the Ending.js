/* 
Bonfire: Confirm the Ending
http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending

Check if a string (first argument) ends with the given target
string (second argument).

Code by Justin Clagg
https://github.com/justinclagg
*/

function end(str, target) {
  
    // Determine how many characters to check
    var targLength = target.length;
  
    // Create a string starting targLength characters from the end of str 
    var subStr = str.substr(-targLength);
  
    // Compare subStr with the target string
    return subStr === target;
}

end("He has to give me a new name", "name");
