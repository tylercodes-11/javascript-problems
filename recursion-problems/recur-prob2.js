// Problme 2: Write a function to compute the sum of an array of integers


function sum(array) { 
    //for single integer 'arrays'
   if (array.length === 1) {
    return array[0];
   }

   else {
       return array.pop() + sum(array); // return last integer plus the the other integer in the array
   }

};

console.log(sum([7,7,7]));