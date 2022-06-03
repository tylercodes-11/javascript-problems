/* Problem 2: Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes in an array and console logs the first and last names of all the people.
*/

let people = [
    {
        firstName: 'Jason',
        lastName: 'Reid',
        age: 23
    },

    {
        firstName: 'Ayla',
        lastName: 'Tyson',
        age: 1
    },

    {
        firstName: 'Maya',
        lastName : 'Johnson',
        age: 21
    }

]

// using forEach method 
function displayNameInfo(peopleArray) {
    peopleArray.forEach(function(a) { 
        console.log(a.firstName + ' ' + a.lastName) 
    });
}
    
displayNameInfo(people);
