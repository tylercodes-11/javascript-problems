/* Problem 2:

Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.

Example array: let colors = ["Red", "Green", "White", "Black"];

Should look like: "Red, Green, White, Black"

*/
//create array with colors as elements
const colors = ['red', 'blue', 'green', 'yellow'];
// using join() method to return elements as a string seperated by comma with space after
console.log(colors.join(', '));