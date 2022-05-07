
// making function taking in two arguments -  string and letter
function letterShown(str, letter) {

    // starting letter count at 0
    let count = 0;

    // making loop to clock each letter position  
    for (let position = 0; position < str.length; position ++) {
        // if letter in string equally second argument "letter" add count
        if (str.charAt(position) == letter) {
            count += 1;
        }
    }
// return count value
    return count;
}


console.log(letterShown('Cartoons and Cereal', 'o'));