// Establishing element links to index.html
var counterEl = document.querySelector("#counter");
var quizQuestionEl = document.querySelector("#quiztitle");
var quizChoicesEl = document.querySelector("#quizdescription");
var startButtonEl = document.querySelector("#startbutton");
var footerEl = document.querySelector(".footer");

// Array holding objects containing questions, choices, and answers
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

// Setting questions array start point
var questionsStart = 0;
// Setting timer starting number
var timeLeft = 91;
// Used to create an ordered list
var ol = document.createElement("ol");
// Used to create a paragraph
var p = document.createElement("p");
// Used to create line break
var lineBreak = document.createElement("br");
// Variable to hold amount of correct answers
var correctAnswers = 0;
// Adding sound for correct and wrong answers
var correctSound = new Audio("assets/audio/correctsound.wav");
var wrongSound = new Audio("assets/audio/wrongsound.mp3");

// Start button function
startButtonEl.addEventListener("click", function (event) {
  // Start timer counting down
  var timerInterval = setInterval(function () {
    timeLeft--;
    counterEl.textContent = timeLeft;

    // Show Game Over when it reaches zero
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      counterEl.textContent = timeLeft;
      // gameOver screen
      gameOver();
    }

    // Show Game Over when all questions have been answered
    if (questionsStart >= 5) {
      clearInterval(timerInterval);
      counterEl.textContent = timeLeft;
      // gameOver screen
      gameOver();
    }
  }, 1000);

  // Remove text and elements from start page
  quizQuestionEl.textContent = "";
  quizChoicesEl.remove();
  startButtonEl.remove();

  // Display first question and its choices
  writeQC();
});

// Function to write questions and choices to HTML
function writeQC() {
  clearQC();
  if (questionsStart < 5) {
    var currentQuestion = questions[questionsStart].question;
    var currentChoices = questions[questionsStart].choices;

    quizQuestionEl.textContent = currentQuestion;
    quizQuestionEl.setAttribute("style", "font-size: 25px; text-align: left");

    quizQuestionEl.appendChild(ol);

    currentChoices.forEach(function (writeList) {
      var li = document.createElement("li");
      li.setAttribute("class", "multipleChoices");
      ol.appendChild(li);
      li.textContent = writeList;
      li.addEventListener("click", checkAnswer);
      li.addEventListener("click", writeQC);
    });
  } else {
    // gameOver screen
    gameOver();
  }
}

// Function to determine and display if user clicked the right answer or a wrong answer
function checkAnswer(event) {
  var usersPick = event.target;

  if (usersPick.textContent === questions[questionsStart].answer) {
    correctAnswers++;
    correctSound.play();
    footerEl.setAttribute("id", "footerCorrect");
    footerEl.setAttribute("style", "border-top: 3px solid gainsboro");
    footerEl.textContent = "Correct!";
    setTimeout(fadeout, 1000);
  } else {
    timeLeft = timeLeft - 10;
    wrongSound.play();
    footerEl.setAttribute("id", "footerWrong");
    footerEl.setAttribute("style", "border-top: 3px solid gainsboro");
    footerEl.textContent = "Wrong!";
    setTimeout(fadeout, 1000);
  }
  // Moving to the next question
  questionsStart++;
}

// Function to clear question and choice area
function clearQC() {
  quizQuestionEl.textContent = "";
  ol.textContent = "";
}

// Fade function for footer message correct or wrong
function fadeout() {
  footerEl.textContent = "";
  footerEl.style.border = "none";
}
// gameOver function
function gameOver() {
  clearQC();
  quizQuestionEl.textContent = "All Done!";

  // Create new <p> element under All Done to show the user's final score
  quizQuestionEl.appendChild(p);

  // Creating new ID for the created <p> element to use for styling in the CSS
  document.getElementsByTagName("p")[0].id = "finalScore";

  // Displaying the user's final score
  p.textContent = "Your final score is " + counterEl.textContent + ".";
  p.appendChild(lineBreak);

  // Creating input box label with user instructions
  var input1Label = document.createElement("label");
  input1Label.setAttribute("id", "initials");
  input1Label.textContent = "Enter initials: ";
  p.appendChild(input1Label);

  // Creating user input text box
  var input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("id", "inputText");
  input1.required = true;
  p.appendChild(input1);

  // Creating submit button for the input box and giving it the same class as all other styled buttons
  var submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("class", "button");
  submitBtn.setAttribute("id", "hsSubmitBtn");
  submitBtn.textContent = "Submit";
  p.appendChild(submitBtn);

  // Adding event listener to the Submit button
  submitBtn.addEventListener("click", function (event) {
    // If statement to make sure the user enters at least one letter for their highscores name
    if (!document.getElementById("inputText").value) {
      alert(
        "You must input at least one character to be listed on the highscores page."
      );
    } else {
      // Save user's input (name) to local storage
      var userName = document.getElementById("inputText").value;
      var nameHistory = JSON.parse(localStorage.getItem("name list")) || [];
      nameHistory.push(userName);
      localStorage.setItem("name list", JSON.stringify(nameHistory));

      // Save user's score to local storage
      var userScore = counterEl.textContent;
      var scoreHistory = JSON.parse(localStorage.getItem("score list")) || [];
      scoreHistory.push(userScore);
      localStorage.setItem("score list", JSON.stringify(scoreHistory));

      // Move user to the Highscores page
      window.location.href = "highscores.html";
    }
  });
}
