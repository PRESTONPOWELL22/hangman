// glabal var   
var words = ["javascript" , "stylesheet" , "bootstrap" , "hypertext"]
// correct word
var word = ""
// letters in correct word
var wordLetters = []
// balnks
var blanks = 0
// current with blanks and letters
var current = []
// wrong letters
var wrong = []

// counter vars
var wins = 0
var losses = 0
var remaining = 10



// when a new game starts we want it to do this
function game(){
// guesses
    remaining = 10
// random word
    word = words[Math.floor(Math.random() * words.length)]
    // console.log(word)

// splits word up into letters
    wordLetters = word.split("")
    // console.log(wordLetters)

// decides how many blanks make up the word
    blanks = wordLetters.length

// var for the current state of the word
    current = []

// keeps track of incorrect letters
    wrong = []

// this  should push
    for (var i = 0; i < blanks; i++){
        current.push("_")
    }

// write to the dom    
    document.getElementById("remaining").innerHTML = remaining

    document.getElementById("word").innerHTML = current.join("")

    document.getElementById("letters-guessed").innerHTML = wrong.join("")

}


// this function will check if the letter is in the word
function checker(letter) {
    var letterCheck = false;

    for (var i = 0; i < blanks; i++){
        if(word[i] === letter){
            letterCheck = true
        } 
    }

    if(letterCheck){
        for(var j = 0; j < blanks; j++){
            if(word[j] === letter) {
                current[j] = letter
            }
        }

        console.log(current)
    }    

    else {
        wrong.push(letter)
        remaining--
    }
}

// this is the function that counts if the game is over and logs wins and losses to the dom
function end() {
    document.getElementById("remaining").innerHTML = remaining
    document.getElementById("word").innerHTML = current.join("")
    document.getElementById("letters-guessed").innerHTML = wrong.join("")

    if(wordLetters.toString() === current.toString()){
        wins++

        document.getElementById("wins").innerHTML = wins
        game()

    }

    else if (remaining === 0){
        losses++
        alert("you suck")

        document.getElementById("losses").innerHTML = losses
        game()
    }


}

// this is the actual game calling the functions
game()
console.log(word)
document.onkeyup = function(event){

    var userInput = String.fromCharCode(event.keyCode).toLowerCase();

    // console.log(userInput)

    checker(userInput)

    end()
}