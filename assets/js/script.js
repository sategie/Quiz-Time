// Create Q&A array

let questions = [
    {
        quest: "How many continents are there in the world?",
        answers: [
            {text:"5", correct:false},
            {text:"7", correct:true},
            {text:"8", correct:false},
            {text:"9", correct:false}
        ]
        
    },
    {
        quest: "What is the capital of Nigeria?",
        answers: [
            {text:"Lagos", correct:false},
            {text:"Ibadan", correct:false},
            {text:"Abuja", correct:true},
            {text:"Port-Harcourt", correct:false}
        ]
        
    },
    {
        quest: "How many outfield players are there in football/soccer?",
        answers: [
            {text:"11", correct:false},
            {text:"10", correct:true},
            {text:"8", correct:false},
            {text:"9", correct:false}
        ]
        
    },
    {
        quest: "How many states are there in Germany?",
        answers: [
            {text:"16", correct:true},
            {text:"7", correct:false},
            {text:"8", correct:false},
            {text:"9", correct:false}
        ]
        
    },
    {
        quest: "How many milliseconds are there in a second?",
        answers: [
            {text:"24", correct:false},
            {text:"60", correct:false},
            {text:"100", correct:false},
            {text:"1000", correct:true}
        ]
        
    }

];

// Get the elements from HTML

let questionContent = document.getElementById("question");
let answerContent = document.getElementsByClassName("btn");
let submitButton = document.getElementById("submit");

// Define the functions and set the innerHTML

function showQuestion() {
    // questionContent.innerHTML = questions[0].quest;
    questionContent.innerHTML = questions[1].quest;
    // questionContent.innerHTML = questions[2].quest;
    // questionContent.innerHTML = questions[3].quest;
} 
showQuestion();

