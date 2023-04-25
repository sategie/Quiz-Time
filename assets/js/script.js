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


//currentQuestionIndex is declared outside the showNexQuestion function to prevent the same question being repeated each time the function is called

let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];

// Add Event listener to start icon

startIcon.addEventListener("click", startGame);

// Define the startGame function to display the question when the Start Icon is clicked

function startGame() {
    startIcon.classList.add("hide");
    quizContainer.classList.remove("hide");
    showNextQuestion();
  }

//Declare showNextQuestion function to set the textContent of the questions and answers

function showNextQuestion() {
    
  let currentQuestion = questions[currentQuestionIndex];

  questionContent.textContent = currentQuestion.quest;

  for (let i = 0; i < answerContent.length; i++) {
    answerContent[i].textContent = currentQuestion.answers[i];
  }

  currentQuestionIndex++;

//   if (currentQuestionIndex >= questions.length) {
//     currentQuestionIndex = 0;
//   }
}
    
      
    answerContent.forEach(function(element, index) {
      element.textContent = currentQuestion.answers[index];
  
      element.addEventListener("click", function() {
        if (currentQuestion.correctIndex === index) {
          alert("Correct Answer!");
        } else {
          alert("Aww... that is incorrect");
        }
        showNextQuestion();
  
      });
    })
  




