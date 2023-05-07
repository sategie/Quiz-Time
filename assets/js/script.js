// Create Q&A array

const questions = [
    {
      quest: "How many continents are there in the world?",
      answers: ["5", "7", "8", "9"], correctIndex: 1
    },
  
    {
      quest: "What is the capital of Nigeria?",
      answers: ["Lagos", "Ibadan", "Abuja", "Port-Harcourt"], correctIndex: 2
    },
  
    {
      quest: "How many outfield players are there in football/soccer?",
      answers: ["11", "10", "8", "9"], correctIndex: 1
    },
  
    {
      quest: "How many states are there in Germany?",
      answers: ["16", "7", "8", "9"], correctIndex: 0
    },
  
    {
      quest: "How many milliseconds are there in a second?",
      answers: ["24", "60", "100", "1000"], correctIndex: 3
    }

  ];

// Get the elements from HTML

let startIcon = document.getElementById("start-icon");
let quizContainer = document.getElementById("quiz");
let questionContent = document.getElementById("question");
let answerContent = document.querySelectorAll(".btn");
let userScore = document.getElementById("score");
let score = 0;
let playAgain = document.getElementById("play");
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let questionNumber = document.getElementById("question-number");
let questionCount = 1;

// Add Event listener to start icon

startIcon.addEventListener("click", startGame);

// Define a shuffledQuestions variable to randomize the questions

let shuffledQuestions = questions.sort(() => Math.random() - .5);

/**
 * Starts the quiz game
 */

function startGame() {
    startIcon.classList.add("hide");
    quizContainer.classList.remove("hide");
    userScore.classList.add("hide");
  playAgain.classList.add("hide");
  questionNumber.classList.remove("hide");
    showNextQuestion();
  }


/**
 * Displays the next question in the game and calls the endGame function when the last question has been answered
 */

function showNextQuestion() {
    questionNumber.textContent = "Question " + questionCount + " of " + questions.length;
  if (currentQuestionIndex >= shuffledQuestions.length) {
    endGame();
  } else {
    currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionContent.textContent = currentQuestion.quest;
    for (let i = 0; i < answerContent.length; i++) {
      answerContent[i].textContent = currentQuestion.answers[i];
    }
  }
  currentQuestionIndex++;
  questionCount++;
}

/**
 * Checks if the provided answer is correct or not and alerts the user accordingly using the Sweet Alert API
 * 
 * @param {number} index - The user's selected answer index
 */

function checkAnswer(index) {
    let rule = currentQuestionIndex === questions.length;
    let correctAnswer = currentQuestion.answers[currentQuestion.correctIndex];
    if (currentQuestion.correctIndex === index) {
      score++;
      Swal.fire({
        title: "Correct answer!",
        icon: "success",
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: rule ? "Finish Quiz" : "Next Question"
      }).then((result) => {
        if (result.isConfirmed) {
          if (rule) {
            endGame();
          } else {
            showNextQuestion();
          }
        }
      });
    } else {
      Swal.fire({
        title: "Wrong Answer!",
        text: "The correct answer is " + correctAnswer,
        icon: "error",
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: rule ? "Finish Quiz" : "Next Question"
      }).then((result) => {
        if (result.isConfirmed) {
          if (rule) {
            endGame();
          } else {
            showNextQuestion();
          }
        }
      });
    }
  }

// Add Event listener to each answer button

answerContent.forEach(function(element, index) {
  element.addEventListener("click", function() {
    checkAnswer(index);
  });
});

/**
 * Ends the quiz game, displays the final score to the user and gives the user the option to play again
 */
function endGame() {
  startIcon.classList.add("hide");
  quizContainer.classList.add("hide");
  userScore.classList.remove("hide");
  userScore.textContent = "Your score is " + score + "/" + questions.length;
  playAgain.classList.remove("hide");
  questionNumber.classList.add("hide");
}

// Add Event listener to the 'Play Again' button which resets the questions index and score, shuffles the questions array and calls the startGame function

playAgain.addEventListener("click", function() {
  currentQuestionIndex = 0;
  score = 0;
  questionCount = 1;
  questionNumber.classList.remove("hide");

  // Use the slice method to create a new array with the current questions and then shuffle the array using the sort method

  shuffledQuestions = questions.slice().sort(() => Math.random() - 0.5);
  startGame();
});



