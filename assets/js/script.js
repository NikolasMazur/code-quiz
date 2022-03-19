var startQuiz = document.getElementById("start");
var timerVar = document.getElementById("countdown");
var timeLeft = 60;
var quizQuestions = document.querySelector("#container");
var defaultTime;
var currentQuestionIndex = 0;
const questions = [
    {
        question: "What does DOM stand for?",
        options: {
            a: "Disfunctional Operation Module",
            b: "Document of Module",
            c: "Document Object Model",
            d: "Data Oriented Model"
        },
    answer: "c"
    },
    {
        question: "Java is the same as JavaScript.",
        options: {
            a: "True",
            b: "False"
        },
    answer: "b"
    },
    {
        question: "Which of the following is an invalid function name?",
        options: {
            a: "start",
            b: "toCelsius",
            c: "return",
            d: "print"
        },
    answer: "c"
    },
    {
        question: "Which of the following is false?",
        options: {
            a: "Variables defined with 'const' cannot be Redecared.",
            b: "Variables defied with 'const' cannot be reassigned.",
            c: "Variables defined with 'const' have Block Scope.",
            d: "Variables defined with 'const' don't need to have a value assigned when declared."
        },
    answer: "d"
    },
    {
        question: "How would you access the first element in an array?",
        options: {
            a: "array[1]",
            b: "array[0]",
            c: "array[-1]",
            d: "array[]"
        },
    answer: "b"
    },
    {
        question: "Which of the following are invalid data types?",
        options: {
            a: "Float",
            b: "String",
            c: "Object",
            d: "None of the above"
        },
    answer: "a"
    },
]

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

