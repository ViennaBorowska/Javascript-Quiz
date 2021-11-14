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
var questIndex = 0;

var timerEl = document.querySelector("#startTimer");
var timeLeft = document.querySelector("#timer");
var questionDisplay = document.querySelector("#quizBox");
var wrapperBox = document.querySelector("#container");
var j = 0;
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
                    finish();
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

    var choice = event.target;

    if (choice.matches("li")) {
        questIndex++
    } else {
        timeLeftCount = timeLeftCount - incorrectPenalty;
    }

        if (questIndex >= questionArr.length) {
            clearInterval(timeStop);
            finish()
            var finishedText = document.createElement("p")
            finishedText.textContent = "End of Quiz!";
        } else {
            render(questIndex);
        }
        questionDisplay.appendChild(finishedText);
}

// FINISHING FUNCTION TO APPEND LAST PAGE

function finish() {
    questionDisplay.innerHTML = "";
    timeLeft.innerHTML = "";

    //PAGE TITLE
    var finishTitle = document.createElement("h1");
    finishTitle.setAttribute("id", "finishTitle");
    finishTitle.textContent = "Congratulations! Quiz finished!"

    questionDisplay.appendChild(finishTitle);
   
    var userScore = timeLeftCount;
    var scoreText = document.createElement("p");
    clearInterval(timeStop);
    scoreText.textContent = "You scored: " + userScore;

    questionDisplay.appendChild(scoreText);
};

  // QUIZ STATS

   
