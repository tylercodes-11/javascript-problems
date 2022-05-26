/* Problem 4:
Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).
*/

const myNumbers = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

function removeDuplicates(arr) {

    let uniqueValuesArray = []; // empty array for unique values to be stored within

    for (let i = 0; i < arr.length; i++) { //iterate through each value in the array
        if (!uniqueValuesArray.includes(arr[i])) { // looks for the same value in the array
            uniqueValuesArray.push(arr[i]); // push value to array if not found
        };
    };
    return uniqueValuesArray; // return the array
};

console.log(removeDuplicates(myNumbers));

