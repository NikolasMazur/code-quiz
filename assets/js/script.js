var startQuiz = document.getElementById("start");
var timerVar = document.getElementById("countdown");
var timeLeft = 60;
var quizQuestions = document.querySelector("#container");
var defaultTime;
var currentQuestionIndex = 0;
var correctAnswer = questions[currentQuestionIndex].correct;
var userScore = 0;
var questions = [{
        question: "What does DOM stand for?",
        a: "Disfunctional Operation Module",
        b: "Document of Module",
        c: "Document Object Model",
        d: "Data Oriented Model",
        answer: "c"
},
{
        question: "Java is the same as JavaScript.",
        a: "True",
        b: "False",
        answer: "b"
},
{
        question: "Which of the following is an invalid function name?",
        a: "start",
        b: "toCelsius",
        c: "return",
        d: "print",
        answer: "c"
},
{
        question: "Which of the following is false?",
        a: "Variables defined with 'const' cannot be Redecared.",
        b: "Variables defied with 'const' cannot be reassigned.",
        c: "Variables defined with 'const' have Block Scope.",
        d: "Variables defined with 'const' don't need to have a value assigned when declared.",
        answer: "d"
},
{
        question: "How would you access the first element in an array?",
        a: "array[1]",
        b: "array[0]",
        c: "array[-1]",
        d: "array[]",
        answer: "b"
},
{
        question: "Which of the following are invalid data types?",
        a: "Float",
        b: "String",
        c: "Object",
        d: "None of the above",
        answer: "a"
},
];

// Create timer and countdown
function timer() {
    defaultTime = setInterval(function() {
        if (timeLeft > 0) {
            timerVar.textContent = "Time: " + timeLeft + " seconds";
            adjustTime(-1);
        } else {
            testEnd();
    }}, 1000);
}

function  adjustTime(amount) {
    timeLeft += amount;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timerVar.textContent = "Time: " + timeLeft + " seconds";
}
startQuiz.onclick = timer;

// Clears header and paragraph elements in 'id = "main"'
function clearElement() {
    quizQuestions.innerHTML="";
    document.querySelector("#main").style.display = "none";
}

var quiz = function (event) {
    event.preventDefault();
    clearElement();
    renderQuestion(questions[currentQuestionIndex]);
};

// Starts quiz
startQuiz.addEventListener('click', quiz);

// Creates header and buttons for when the test starts
var renderQuestion = function (question) {
    quizQuestions.innerHTML = "";

    var questionHeader = document.createElement("h2");
    questionHeader.textContent = question.question;

    var answerA = document.createElement("button");
    answerA.textContent = question.a;
    answerA.addEventListener("click", answerClick);

    var answerB = document.createElement("button");
    answerB.textContent = question.b;
    answerB.addEventListener("click", answerClick);

    var answerC = document.createElement("button");
    answerC.textContent = question.c;
    answerC.addEventListener("click", answerClick);

    var answerD = document.createElement("button");
    answerD.textContent = question.d;
    answerD.addEventListener("click", answerClick);
}