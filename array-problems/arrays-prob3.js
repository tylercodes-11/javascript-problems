/* Problem 3: 
Define a function that takes in an array of numbers/integers and returns the sorted version of that array, greatest to least
*/

const myArray = [-3,8,7,6,5,-4,3,2,1];
//sort numbers in ascending order 
function sortNumbers (arr){
    return myArray.sort(function(a, b){return a - b});
}

console.log(sortNumbers(myArray));