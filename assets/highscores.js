// Establishing links to elements in highscores.html
var hsList = document.querySelector("#highscoreslist");
var goBackBtn = document.querySelector("#gobackbutton");
var clearBtn = document.querySelector("#clearbutton");

// Arrays to hold highscore names and scores
var highscoreNames = [];
var highscoreScores = [];

// Calling retrieve function
retrieve();

// Function to display highscores from local storage
function displayHS() {
  for (var i = 0; i < highscoreNames.length; i++) {
    var highscores = highscoreNames[i] + " - " + highscoreScores[i];
    console.log(highscores);
  }
}

// Function to get data stored in local storage
function retrieve() {
  var storedNames = JSON.parse(localStorage.getItem("name list"));
  highscoreNames = storedNames;

  var storedScores = JSON.parse(localStorage.getItem("score list"));
  highscoreScores = storedScores;

  displayHS();
}

console.log(highscoreNames);
console.log(highscoreScores);
