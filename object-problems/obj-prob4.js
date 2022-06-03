// Create an object, then write a JavaScript function that checks whether an object contains the specified key.

let financialGoals = {
    'prophecy': 'Action is key',
    'cash': 1000000000,
    'investments': {
        'Stocks':  ['S&P 500', 'vanguard'],
        'real estate': ['residential', 'commercial']
        }
}

 //fucntion for checking property within object
function checkItem(object, item) {
    return object.hasOwnProperty(item);
}

console.log(checkItem(financialGoals,'cash'));

