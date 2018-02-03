

// GLOBAL VARIABLES

// variable for my array of correct words
var words = ['bootstrap', 'cascadingstylesheets', 'hypertextmarkuplanguage', 'javascript']

// variable for the array's length
var arrLength = words.length

// variable for correct guesses
var right = 0

// variable for wins
var wins = 0

// variable for losses
var losses = 0

// variable for hidden word 
var seceretWord = []

// loop that goes through the array
for(i=0; i<arrLength; i++){
  console.log(words[i])
}

// this picks a word and words[wordPicker] = the correct word
var wordPicker = Math.floor(Math.random() * arrLength);
console.log(wordPicker)

// console.log(words[wordPicker])

var correctWord = (words[wordPicker])
console.log(correctWord)


var hiddenWord = correctWord.length
console.log(hiddenWord)


// This shows the converts the word to _ _ _ and writes it to the html element
window.onload = function picksWord(){
for (i = 0 ; i < hiddenWord ; i++){
  seceretWord += "_ "
  // console.log(seceretWord)
}
document.getElementById("word").innerHTML=seceretWord
}










