function longer(word, wordy){
	return (wordy.length > word.length) ? wordy : word;
}

function longestWord(string) {
	let words = string.split(" ");
	return words.reduce(longer);
}

console.log(longestWord("Shawshank Redemption"));