// writing a function for comparing two word lengths

function longer(word1, word2, word3){
	console.log(word1, word2, word3);
	return (word2.length > word1.length) ? wordy : word;
	
}

// function for splitting up each word for length analysis
function longestWord(string) {
	let words = string.split(" ");
	return words.reduce(longer);
}

console.log(longestWord("Shawshank Redemption"));



function findLongestWord(str) {
	const arrayOfWords = str.split(" ");
  
	//you can use an empty string "" bc the length of it is 0,
	//or you can use the first word, or any random word in the arrayOfWords.
  
	//point is, you need a default reference point for your loop to compare with
	//we need a value here to start with so we can use it to compare in our loop.
  
	let longestWord = "";
  
	for(let i = 0 ; i < arrayOfWords.length ; i++) {
	  if(arrayOfWords[i].length > longestWord.length) {
		longestWord = arrayOfWords[i];
	  } 
	}
  
	return longestWord;
  }