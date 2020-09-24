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

// Start button function
startButtonEl.addEventListener("click", function (event) {
  console.log("clicked: ", startButtonEl);
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
  // Display first question and its choices
  writeQC();
});

// Function to write questions and choices to HTML
// writeQC
function writeQC() {
  quizQuestionEl.textContent = "";
  quizChoicesEl.remove();
  startButtonEl.remove();
  // For loop to cycle through the questions array
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[questionsStart].question;
    var currentChoices = questions[questionsStart].choices;

    quizQuestionEl.textContent = currentQuestion;
  }
  // Creating list under the quizQuestionEl element
  quizQuestionEl.appendChild(ol);
  // For each loop to create a list of choices for each question
  currentChoices.forEach(function (writeList) {
    var li = document.createElement("li");
    ol.appendChild(li);
    li.textContent = writeList;
  });
}

// gameOver function placeholder
