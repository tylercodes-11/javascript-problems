// writing a function for comparing two word lengths

function longer(word, wordy){
	return (wordy.length > word.length) ? wordy : word;
}

// function for splitting up each word for length analysis
function longestWord(string) {
	let words = string.split(" ");
	return words.reduce(longer);
}

console.log(longestWord("Shawshank Redemption"));