const questions = [
    {questions:"What does HTML stand for?",
     options:["Hyper Text Markup Language","High Text Markup Language","Hyperlink and Text Markup Language","Home Tool Markup Language"],
    answer:"Hyper Text Markup Language"},

    {questions:"Which of the following is not a programming language?",
     options:["Java","Python","JSON","C++"],
    answer:"JSON"},

    {questions:"What does CSS stand for",
     options:[" Cascading Style Sheets","Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
    answer:"Cascading Style Sheets"},

    {questions:"Which of the following is a relational database management system?",
     options:[" MongoDB","PostgreSQL","Redis","Cassandra"],
    answer:"PostgreSQL"},
]

let currentQuestionIndex = 0;
let score = 0;


function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionElement = document.getElementById("question");
    let answersElement = document.querySelector(".answers");

    questionElement.textContent = "Question " + (currentQuestionIndex + 1) + ": " + currentQuestion.questions;
    answersElement.innerHTML = " "
    let clicked = false;
    currentQuestion.options.forEach(option => {
        let answerElement = document.createElement('p');
        answerElement.textContent = option;

        answerElement.classList.add('answer');
        answerElement.addEventListener('click',function handleClick(){
         if(!clicked) { 
            if(checkAnswer(option,currentQuestion)){
                answerElement.style.border = "3px solid green";
                clicked = true;
                disableAnswer(answersElement,answerElement)
            } else{
                answerElement.style.border = "3px solid red";
                clicked = true; 
                disableAnswer(answersElement,answerElement);
            };
            answerElement.removeEventListener('click', handleClick);
    }});
        answersElement.appendChild(answerElement);
    })

}

function disableAnswer(answersElement, selectedAnswer) {
    let allAnswers = answersElement.querySelectorAll('.answer');
    allAnswers.forEach(answer => {
        if (answer.textContent !== selectedAnswer.textContent) {
            answer.style.border = "3px solid lightgrey";
        }
    });
}



function checkAnswer(answer,question){
    if(answer === question.answer) {
        score++;
        currentQuestionIndex++;
        return true;
    } else{
        currentQuestionIndex++;
        return false;
    }
    

}



function endQuiz(){
    var appElement = document.querySelector('.app');
    appElement.innerHTML = "<h2>Quiz Completed!</h2><p>Your score: " + score + "/" + questions.length + "</p>";
}

var nextButton = document.querySelector("button")
nextButton.addEventListener("click",function(){
    if(currentQuestionIndex<questions.length){
        displayQuestion()
    } else {
        endQuiz();
    }
})

displayQuestion();



