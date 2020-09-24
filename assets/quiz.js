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
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    answer: "3. parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
];
// Setting questions array start point
var questionsStart = 0;
// Setting timer starting number
var timeLeft = 76;

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
  quizChoicesEl.textContent = "";
  startButtonEl.remove();
  // For loop to cycle through the questions array
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[questionsStart].question;
    console.log("question: ", currentQuestion);
    var currentChoices = questions[questionsStart].choices;
    console.log("choices: " + currentChoices);
    quizQuestionEl.textContent = currentQuestion;
    quizChoicesEl.textContent = currentChoices;
  }
}

// gameOver function placeholder
