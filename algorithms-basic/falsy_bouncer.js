/* 
Bonfire: Falsy Bouncer
http://www.freecodecamp.com/challenges/bonfire-falsy-bouncer

Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Code by Justin Clagg
https://github.com/justinclagg
*/

function bouncer(arr) {
  
    var filtArr = [];
  
    filtArr = arr.filter(function(val) {
        // .filter() removes elements that cause the callback function
        // to return false. This removes falsy values from arr.
        return val;
    });
  
    return filtArr;
  
}

bouncer([7, "ate", "", false, 9]);
