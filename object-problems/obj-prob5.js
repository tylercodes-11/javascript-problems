// Write a JavaScript function to sort the following array of objects by title value.

let bookReadersArray = [ 

    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
 
    ];

    //making function to sort string titles alphabetically
const sortTitles = bookReadersArray.sort((a,b) => { //sorting with comparative function
    if (a.title < b.title) return -1; //to sort in correct alphebetical order
return 1 
});
    

 console.log(sortTitles);