// ARRAY OF QUESTIONS
var questionArr = [
    {
        title: "Q1",
        possAns: ["a", "b", "c", "d"],
        answer: "a"
    }, 
    {
        title: "Q2",
        possAns: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Q3",
        possAns: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Q4",
        possAns: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "Q5",
        possAns: ["a", "b", "c", "d"],
        answer: "a"
    },    
]

// DECLARE VARIABLES
var userScore = 0;
var questIndex = 0;

var timerEl = document.querySelector("#startTimer");
var timeLeft = document.querySelector("#timer");
var questionDisplay = document.querySelector("#quizBox");
var wrapperBox = document.querySelector("#container");

var timeLeftCount = 100;
var timeStop = 0;
var incorrectPenalty = 10;
var createList = document.createElement("ul");

// TIMER STARTS WHEN START BUTTON IS CLICKED
timerEl.addEventListener("click", function () {
        if (timeStop === 0) {
            timeStop = setInterval(function () {
                timeLeftCount--;
                timeLeft.textContent = "Time: " + timeLeftCount;

                if (timeLeftCount <= 0) {
                    clearInterval(timeStop);
                }
    }, 1000);
}
    render(questIndex);
});

function render(questIndex) {
    questionDisplay.innerHTML = "";
    createList.innerHTML= "";

    // LOOP THROUGH QUESTION ARRAY
    for (var i = 0; i < questionArr.length; i++) {
        var currentQ = questionArr[questIndex].title;
        var currentChoices = questionArr[questIndex].possAns;
        questionDisplay.textContent = currentQ;
    }
    // FOR EACH LOOP FOR POSSIBLE ANSWERS
    currentChoices.forEach(function (newItem) {
        var answerList = document.createElement("li");
        answerList.textContent = newItem;
        questionDisplay.appendChild(createList);
        createList.appendChild(answerList);
        answerList.addEventListener("click", (checkAnswer));
    })
}

// FUNCTION TO COMPARE CHOICE WITH CORRECT ANSWER
function checkAnswer(event) {
    
}
