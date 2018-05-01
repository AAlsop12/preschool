function hangMan() {
    var selectableWords = [
       "Phillippines",
       "Costa Rica",
       "Thailand",
       "Iceland",
       "Stonehenge",
       "Egypt",
       "Brazil",
       "Antarctica",
       "Fiji"
       ];
    
       
    
    
     var numGuesses = 8;
    
     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y', 'z'
                    ];
    
     var wordToGuess = "";
     var currentLetters = [];
     var correctLetter = [];
     var incorrectGuess = []
     
     var wordToGuess = selectableWords[Math.floor(Math.random() * selectableWords.length)];
     
     console.log(wordToGuess);
     currentLetters = wordToGuess.split("");
     console.log(currentLetters);
     var str = wordToGuess  
     console.log(`The word you are guessing has ${wordToGuess.length} letters`);
    
     var blanksAndSuccess = [];
     var blanks = 0;
     blanks = currentLetters.length;
     for (var i = 0; i < blanks; i++) {
       blanksAndSuccess.push("_")
     }
      console.log(blanksAndSuccess);
     
     var playerGuess = prompt("Guess a Letter")
    
       if (wordToGuess.includes(playerGuess) == true) {
        console.log(blanks.replace(playerGuess, "_"));
       }
      //var guessedLetter = [];
    
    }
    
    hangMan();