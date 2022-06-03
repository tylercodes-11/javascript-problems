/* Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object.
*/
// gift basket object
let giftBasket = {
    letter: 'Happy Birthday',
    giftBags: 1,
    gift: 'perfume'
};
// create function that logging the objects items 
function getItems() {
    console.log(Object.keys(giftBasket)); 
}

getItems();
