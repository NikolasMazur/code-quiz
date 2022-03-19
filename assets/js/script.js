var startQuiz = document.getElementById("start");
var timerVar = document.getElementById("countdown");
var timeLeft = 60;
var quizQuestions = document.querySelector("#container");
var defaultTime;
var currentQuestionIndex = 0;
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

var correctAnswer = questions[currentQuestionIndex].correct;
var userScore = 0;

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

// Determines if an answer is correct, if yes then it adds +1 to userScore, if not it takes -1 from userScore as well as 10 seconds from remainingTime.
var answerClick = function(event) {
    event.preventDefault();
    var userAnswer = event.target.textContent;
    correctAnswer = questions[currentQuestionIndex].correct;
    var answerDetermination = document.querySelector("#answers");
    if (userAnswer !== correctAnswer) {
        adjustTime(-10);
        userScore--;
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            endQuizPage();
        } else {renderQuestion(questions[currentQuestionIndex])};
    }
    else if (userAnswer === correctAnswer) {
        currentQuestionIndex++;
        userScore++;
        if (currentQuestionIndex >= questions.length) {
            endQuizPage();
        } else {renderQuestion(questions[currentQuestionIndex])};
    }
};

// Functionality to end quiz when questions are finished or time runs out
function endQuizPage() {
    clearElement();
    timerVar.textContent = "";
    clearInterval(defaultTime);
    var endPage = document.createElement("h2");
    quizQuestions.appendChild(endPage);

    let blank = document.querySelector("#answers");
    blank.innerHTML = "";

    endPage.innerHTML = "Final score is " + userScore + ". Enter your initials to save";

    var initialBox = document.createElement("input");
    blank.appendChild(initialBox);

    // Creates submit button
    var submitInitialBtn = document.createElement("button");
    submitInitialBtn.textContent = "Submit";
    blank.appendChild(submitInitialBtn);

    submitInitialBtn.addEventListener("click", () => {
        
        if (initialBox.value.length === 0) return false;

        let storeInitials = (...input) => {
            let data = JSON.stringify({ "name":input[0], "score":input[1]})
            localStorage.setItem("object", data)
        }
        storeInitials(initialBox.value, userScore);

        var playAgain = document.createElement("button");
        playAgain.textContent= "Play Again!";
        blank.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            location.reload();
        })
    });

    document.querySelector("input").value = "";

    initialBox.addEventListener("submit", endQuizPage);
    
};

// Starts quiz
startQuiz.addEventListener('click', quiz);