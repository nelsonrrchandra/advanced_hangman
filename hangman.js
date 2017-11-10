var inquirer = require("inquirer");

var word = require("./words.js");

var wordList = ["duck", "hippo", "wombat", "possum", "snake", "tiger", "penguin", "ablatross", "starfish", "woodpecker"];

var currentWord = "";

var chances = 6;

function init() {
    currentWord = new word();
    loop();
}

function loop() {
    var wordDisp = "";
    for (var i = 0; i < currentWord.letters.length; i++) {
        wordDisp += currentWord.letters[i].display;
    }
    console.log(wordDisp);
    console.log("Guesses Left: " + chances);

    inquirer.prompt([{
        name: "letter",
        type: "input",
        message: "guess a letter:"
    }]).then(function(user) {
        var success = false;
        guess = user.letter.toLowerCase();
        for (var i = 0; i < currentWord.letters.length; i++) {
            if (guess == currentWord.letters[i].value) {
                currentWord.letters[i].display = currentWord.letters[i].value
                success = true;
            }
        }

        if (success == false) {
            chances -= 1;
        }

        if (currentWord.word==wordDisp){
        	console.log("Good job.");
        	init();
        }else if (chances== 0){
        	gameOver();
        }
        else{
        	loop();
        }
    })
}

function gameOver (){
	 inquirer.prompt([{
        name: "choice",
        type: "list",
        message: "You lose. Try again?",
        choices: ["Yes", "No"]
    }]).then(function(user) {
    	if (user.choice== "Yes"){
    		chances=6;
    		init();
    	}
    	else{
    		process.exit();
    	}
    })
}

init();