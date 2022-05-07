// Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".

// 


function buzzMachine () {

    for (let i = 1; i < 100; i++) {
        // word variable for fizzbuzz, reduce conditionals checking two words, not three.
        let word = '';

            // if number divided by 3 or 5 and equals 0, word = "fizz,buzz,fizzbuzz"
        if (i % 3 === 0) {
            word += "Fizz";
        }
        if (i % 5 ===0) {
            word += "Buzz";
        }

        // console loging number place and word
        console.log (i, word);
        
    }
}

buzzMachine();