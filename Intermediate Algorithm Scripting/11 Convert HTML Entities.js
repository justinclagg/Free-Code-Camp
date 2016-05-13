/* 
Convert HTML Entities
https://www.freecodecamp.com/challenges/convert-html-entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.

Code by Justin Clagg
https://github.com/justinclagg
*/

function convertHTML(str) {
  
  // HTML entities corresponding to characters
  var htmlObj = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": "&apos;"
  };
  
  var regex = /[&<>"']/g;
  // Replace each occurance of the given characters with their HTML value
  var htmlStr = str.replace(regex, function(match) {
    return htmlObj[match];
  });
  
  return htmlStr;
}

convertHTML("Dolce & Gabbana");
