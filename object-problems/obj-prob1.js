/* Problem 1: Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

Your JavaScript function should take in two parameters, the object and the key/property you want to delete.
*/

// create sample object with multiple properties
let sampleObj = {
 prop1: 2,
 prop2: 3,
};

function deleteProp(obj,property) { // function with two parameters: object and property we want deleted
    delete obj[property]; // deleting the property from specified object
    return obj; //returning the object to see if deleted
};

console.log(deleteProp(sampleObj,'prop1')); //console log with object as first paramater and property in quotes for second parameter to be deleted
