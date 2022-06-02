/* 
Arrays Problem 1: Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.

Example: If I pass in an array and the number 2, your function returns the first 2 elements in that arrays.
*/

// Writing a function to return a number gift items in baby registry

// creating gift array of with a multiple items

const giftArray = ['diapers', 'wipes', 'clothes', 'bassinet', 'stroller', 'pacifier'];

// creating variable and function for with paramaters " an array and a number"
const getItems = function (array, num) {
    
    if (array === null || num === null) // check if it is a valid array
        return "Your input needs to be ('array', 'number'), please try again.";

    if (num < 0) // for numbers greater than 0 only 
        return 'Please enter in a number that is greater than 0.'

    if (num > array.length) // for numbers greater than array length
        return 'We only have ' + array.length + " items. Please try again.";

    return array.slice(0, num); //return copy array with number of elements from giftArray
}

console.log(getItems(giftArray, 2)); // testing to return first 2 elements

