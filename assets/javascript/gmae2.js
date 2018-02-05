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


var wins = 0
var losses = 0
var remaining = 10




function game(){

    remaining = 10

    word = words[Math.floor(Math.random() * words.length)]

    wordLetters = word.split("")

    blanks = wordLetters.length

    current = []

    wrong = []

    for (var i = 0; i < blanks; i++){
        current.push("_")
    }

    document.getElementById("remaining").innerHTML = remaining

    document.getElementById("word").innerHTML = current.join("")

    document.getElementById("letters-guessed").innerHTML = wrong.join("")

}

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


game()
console.log(word)
document.onkeyup = function(event){

    var userInput = String.fromCharCode(event.keyCode).toUpperCase();

    // console.log(userInput)

    checker(userInput)

    end()
}