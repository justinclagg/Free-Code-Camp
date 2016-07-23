/* 
Bonfire: Where art thou
http://www.freecodecamp.com/challenges/where-art-thou

Make a function that looks through an array of objects (first argument) and returns an array 
of all objects that have matching property and value pairs (second argument). Each property 
and value pair of the source object has to be present in the object from the collection if 
it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object
from the array (the first argument), because it contains the property and it's value, 
that was passed on as the second argument.

Code by Justin Clagg
https://github.com/justinclagg
*/

function where(collection, source) {
  
    var filtArr = [];  // Objects from collection that contain all property-value pairs from source 
  
    // Used as a filter callback function
    // Tests if all property-value pairs from source are found in the collection object
    function testProp(obj) {
      
        // Iterates through each property name in the object source (this)
        for (var prop in this) {
            // If a property-value pair from source is not found in collection
            // return false to exclude that object
            if (!(obj.hasOwnProperty(prop) && obj[prop] === this[prop])) {
                return false;
            }
        } 
        // If all property-value pairs are found, return true to add object to filtArr
        return true;
    }
  
    // Tests each object in collection
    // Objects that result in testProp returning true are added to filtArr
    filtArr = collection.filter(testProp, source);
    
    return filtArr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
