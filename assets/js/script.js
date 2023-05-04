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
    },


  
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

// Add Event listener to start icon

startIcon.addEventListener("click", startGame);

// Define a shuffledQuestions variable to randomize the questions

let shuffledQuestions = questions.sort(() => Math.random() - .5);

// Define the startGame function to display the question when the Start Icon is clicked

function startGame() {
    startIcon.classList.add("hide");
    quizContainer.classList.remove("hide");
    userScore.classList.add("hide");
  playAgain.classList.add("hide");
    showNextQuestion();
  }

//Declare showNextQuestion function to run an endGame function when the game is over and set the questions and answers text content

function showNextQuestion() {

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
}

// Define the checkAnswer function to check if the provided answer is correct or not and alert the user accordingly

function checkAnswer(index) {
  if (currentQuestion.correctIndex === index) {
    score++;
    Swal.fire({
      title: 'Correct answer!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Next Question'
    }).then((result) => {
      if (result.isConfirmed) {
        showNextQuestion();
      }
    });
  } else {
    Swal.fire({
      title: 'Wrong Answer!\n The correct answer is ' + currentQuestion.answers[currentQuestion.correctIndex],
      icon: 'error',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Next Question'
    }).then((result) => {
      if (result.isConfirmed) {
        showNextQuestion();
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

// Add an endGame function to display the score of the user and a 'Play Again' button when the game is over

function endGame() {
  startIcon.classList.add("hide");
  quizContainer.classList.add("hide");
  userScore.classList.remove("hide");
  userScore.textContent = "Your score is " + score + "/" + questions.length;
  playAgain.classList.remove("hide");
}

// Add Event listener to the 'Play Again' button which resets the questions index and score, shuffles the questions array and calls the startGame function
playAgain.addEventListener("click", function() {
  currentQuestionIndex = 0;
  score = 0;
  // Use the slice method to create a new array with the current questions and then shuffle the array using the sort method
  shuffledQuestions = questions.slice().sort(() => Math.random() - 0.5);
  startGame();
});



