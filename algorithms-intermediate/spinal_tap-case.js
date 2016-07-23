/* 
Spinal Tap Case
https://www.freecodecamp.com/challenges/spinal-tap-case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Code by Justin Clagg
https://github.com/justinclagg
*/

function spinalCase(str) {
  
  var tempStr, spinalStr = "";
  var separatorRegex = /[_\s+]/g;
  var camelCaseRegex = /([a-z])([A-Z])/g;
  
  // Replace spaces and underscores with dashes
  tempStr = str.replace(separatorRegex, "-");
  // Add a dash between lowercase letters followed by an uppercase letter
  spinalStr = tempStr.replace(camelCaseRegex, "$1-$2").toLowerCase();
  
  return spinalStr;
}

spinalCase('thisIsSpinalTap');
