/* Problem 2: Create a P element with a link inside. 
Then write a javascript function to the the HREF attribute of the link 
*/

// function to getlink
function getLink () {
    //making variable for the url, pointing it towards the link by its Id and href element - the url to Google
    const linkUrl = document.getElementById('link').getAttribute('href');

    // appending p1 to the link Url variable - opening Google 
    document.getElementById('p1').innerHTML = linkUrl;
}