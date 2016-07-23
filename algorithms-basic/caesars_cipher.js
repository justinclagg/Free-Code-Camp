/* 
Bonfire: Caesars Cipher
http://www.freecodecamp.com/challenges/bonfire-caesars-cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters
will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

The provided code transforms the input into an array for you, codeArr. Place the decoded values 
into the decodedArr array where the provided code will transform it back into a string.

Code by Justin Clagg
https://github.com/justinclagg
*/

function rot13(encodedStr) {

  // Define the shift in each letter
  shift = 13;
  // Create an array for the encoded string
  var codeArr = encodedStr.split("");
  // Create an array for the decoded string
  var decodedArr = [];

  for (var i = 0; i < encodedStr.length; i++) {

      // Get each character value
      charVal = codeArr[i].charCodeAt(0);
      console.log(charVal);
      // Only transform capital letters
      if (charVal >= 65 && charVal <= 90) {
        // Shift each letter in character code format and convert back to ascii
        decodedArr[i] = String.fromCharCode((charVal + shift - 65) % 26 + 65);
      } else {
        // Copy all other characters unchanged
        decodedArr[i] = codeArr[i];
      }
  }
  
  return decodedArr.join("");
}

// Change the inputs below to test
rot13("SERR YBIR?");
