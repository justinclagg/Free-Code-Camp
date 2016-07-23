/* 
Boo Who
https://www.freecodecamp.com/challenges/boo-who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

Code by Justin Clagg
https://github.com/justinclagg
*/

// new Boolean(value) creates a boolean object with internal true or false values
// When an object is placed in a conditional statement it evaluates as true

function booWho(bool) {
  // The boolean primitives true and false have the typeof "boolean"
  return (typeof bool === "boolean"); 
}

booWho(true);
