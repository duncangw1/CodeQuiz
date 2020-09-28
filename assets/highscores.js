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

    var li = document.createElement("li");
    li.setAttribute("class", "highscoreList");
    li.textContent = highscores;
    hsList.appendChild(li);
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

// Event listener to make the Clear button clear all highscores data from the page and local storage
clearBtn.addEventListener("click", function () {
  hsList.textContent = "";
  localStorage.clear("name list");
  localStorage.clear("score list");
});

// Event listener to make the Go Back button take the user to index.html
goBackBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
