

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
var seceretWord = ""

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



window.onload = function picksWord(){
for (i = 0 ; i < hiddenWord ; i++){
  seceretWord += "_ "
  // console.log(seceretWord)
}
document.getElementById("word").innerHTML=seceretWord
}




// }

// // function for a hint

// var hint = function () {
//   if (correctWord === words[0]) {
//     catagoryName.innerHTML = "Popular CSS Library"
//   } else if (chosenCategory === categories[1]) {
//     catagoryName.innerHTML = "Language for styling the web"
//   } else if (chosenCategory === categories[2]) {
//     catagoryName.innerHTML = "The basic language of the web"
//   }
//   else{
//     catagoryName.innerHTML = "The programming language of the web"
//   }
// }

// comments = function () {
//   showLives.innerHTML = "You have " + lives + " lives";
//   if (lives < 1) {
//     showLives.innerHTML = "Game Over";
//   }
//   for (var i = 0; i < geusses.length; i++) {
//     if (counter + space === geusses.length) {
//       showLives.innerHTML = "You Win!";
//     }
//   }
// }

//  





