



function vowelCount(str) {
    // vowels
    const vowels = ['a','e','i','o','u'];
    // starting vowel count
    let count = 0;
    // splitting each letter and lowercasing
    const arrayOfLetters = str.toLowerCase().split('');

        // loop through string to test for vowel
    // lowers case to split each letter
    for (let x = 0; x < arrayOfLetters.length; x ++) {
        if (vowels.includes(arrayOfLetters[x])) {
            count += 1;
        }
    }

    return count;
}

// take input

console.log(vowelCount("how many vowels"));