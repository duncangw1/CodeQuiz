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
var timeLeft = 76;
// Used to create an ordered list
var ol = document.createElement("ol");
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
      counterEl.textContent = "Game over!";
      // gameOver function placeholder
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

  var currentQuestion = questions[questionsStart].question;
  var currentChoices = questions[questionsStart].choices;

  quizQuestionEl.textContent = currentQuestion;
  quizQuestionEl.setAttribute("style", "font-size: 25px; text-align: left");

  quizQuestionEl.appendChild(ol);

  currentChoices.forEach(function (writeList) {
    var li = document.createElement("li");
    ol.appendChild(li);
    li.textContent = writeList;
    li.addEventListener("click", checkAnswer);
    li.addEventListener("click", writeQC);
  });
}

// Function to determine and display if user clicked the right answer or a wrong answer
function checkAnswer(event) {
  var usersPick = event.target;

  if (usersPick.textContent === questions[questionsStart].answer) {
    correctAnswers++;
    correctSound.play();
    footerEl.textContent = "Correct!";
    setTimeout(fadeout, 1000);
  } else {
    timeLeft = timeLeft - 10;
    wrongSound.play();
    footerEl.textContent = "Wrong!";
    setTimeout(fadeout, 1000);
  }
  // Moving to the next question
  questionsStart++;
  console.log("questionsStart: ", questionsStart);
}

// Function to clear question and choice area
function clearQC() {
  quizQuestionEl.textContent = "";
  ol.textContent = "";
}

// Fade function for footer message correct or wrong
function fadeout() {
  footerEl.textContent = "";
}
// gameOver function placeholder
