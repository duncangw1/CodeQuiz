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
  console.log(quizQuestionEl);
  console.log(quizChoicesEl);
}
