/*
Problem 4: Create an HTML page with a dropdown list with three items in it, 
then write a JavaScript function that displays the number of items and displays the item in the list when someone selects something from the dropdown.
*/


// Creating leaderboard function
function getleaderBoard() {
// grab the dropdown select element by its id and save it to leaderboard variable
    const leaderBoard = document.getElementById('leaderboard');

// acquire the total number of racers inside the select element
    const numOfRacers = document.getElementById('leaderboard').length;
        console.log(numOfRacers);

// Now we get the selected name from the dropdown list
// and return value
    const selectedOption = leaderBoard.options[leaderBoard.selectedIndex].value;
// create variable for string of racers
    let stringOfRacers = "";

    for (let i = 0; i < leaderBoard.length; i++) {

        stringOfRacers = stringOfRacers + leaderBoard.options[i].text + ', ';

        }

    document.getElementById('p1').innerHTML = stringOfRacers;
}