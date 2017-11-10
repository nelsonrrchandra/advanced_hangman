var wordList= ["duck", "hippo", "wombat", "possum", "snake", "tiger", "penguin", "ablatross", "starfish", "woodpecker"];

var letters = function(letter){
	this.display= "_";
	this.value=letter;
};

var word= function(){
	this.word= wordList[Math.floor(Math.random()*(wordList.length+1))];
	this.letters = []
	for (i=0; i<this.word.length; i++){
		var letter= new letters(this.word.charAt(i));
		this.letters.push(letter);
	}
}

module.exports = word;