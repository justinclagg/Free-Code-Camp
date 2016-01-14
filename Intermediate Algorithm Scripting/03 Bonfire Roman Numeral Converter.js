/* 
Bonfire: Roman Numeral Converter
http://www.freecodecamp.com/challenges/bonfire-roman-numeral-converter

Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Code by Justin Clagg
https://github.com/justinclagg
*/

// JSON containing numbers and their corresponding roman numerals
var romanNumeral = [
  
    // First integer place
    {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX"    
    }, 
    // Second integer place
    {
        "1": "X",
        "2": "XX",
        "3": "XXX",
        "4": "XL",
        "5": "L",
        "6": "LX",
        "7": "LXX",
        "8": "LXXX",
        "9": "XC"
    },
    // Third integer place
    {
        "1": "C",
        "2": "CC",
        "3": "CCC",
        "4": "CD",
        "5": "D",
        "6": "DC",
        "7": "DCC",
        "8": "DCCC",
        "9": "CM"
    },
    // Fourth integer place
    {
        "1": "M",
        "2": "MM",
        "3": "MMM",
        "4": "MV",
        "5": "V",
        "6": "VM",
        "7": "VMM",
        "8": "VMMM",
        "9": "MX"
    }
];


// Treat each integer place separately
function convert(num) {
    
    var i = 0;
    var romanStr = "";
    // Put each integer in the given number into an array
    // Reverse the string so that the 0 index is always the first integer place
    var numArr = num.toString().split('').reverse();
  
    // Replace each element in numArr with its value in the romanNumeral object array
    for (i = 0; i < numArr.length; i++) {
        // romanNumeral is made so that the first object at i=0 is the first integer place
        // Each numArr[i] has a property name in romanNumeral
        numArr[i] = romanNumeral[i][numArr[i]];
    }
   
    // Create a string of roman numerals by joining all elements of numArr
    romanStr = numArr.reverse().join('');
    
    return romanStr;
}

convert(2016);
