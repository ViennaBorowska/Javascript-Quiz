// ARRAY OF QUESTIONS
var questionArr = [
    {
        title: "Inside which element do we put the JavaScript?",
        possAns: ["<script>", "<scripting>", "<js>", "<javascript>"],
        answer: "<script>"
    }, 
    {
        title: "Where is the correct place to insert a JavaScript link?",
        possAns: ["The <body> section", "The <head> section", "Either the <head> or the <body> section"],
        answer: "Either the <head> or the <body> section"
    },
    {
        title: "An external JavaScript file must contain the <script> tag?",
        possAns: ["True", "False"],
        answer: "True"
    },
    {
        title: "How would you call a function called 'myFunction'",
        possAns: ["call function myFunction()", "call myFunction()", "myFunction()", "dial myFunction()"],
        answer: "myFunction()"
    },
    {
        title: "What is the correct syntax of an IF statement?",
        possAns: ["if i = 5 then", "if (i === 5)", "if i == 5 then", "if i = 5"],
        answer: "if (i === 5)"
    },    
]

// DECLARE VARIABLES
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

    if (choice.textContent === questionArr[questIndex].answer) {
        questIndex++
        
    } else {
       timeLeftCount = timeLeftCount - incorrectPenalty;
       questIndex++
    }

        if (questIndex >= questionArr.length) {
            clearInterval(timeStop);
            finish()
        } else {
            render(questIndex);
        }      
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

    //CREATE SCORE INPUT
    var scorePrompt = document.createElement("p")
    scorePrompt.setAttribute("type", "text");
    scorePrompt.textContent = "Enter your initials to submit your score to the scoreboard: ";

    questionDisplay.appendChild(scorePrompt);
    //INPUT SCORE TO SCOREBOARD
        var scoreInput = document.createElement("input");
        scoreInput.setAttribute("type", "text");
        scoreInput.setAttribute("id", "initials");
        scoreInput.textContent = "";

        questionDisplay.appendChild(scoreInput);

    //SUBMIT SCORE INPUT
        submitScore = document.createElement("button");
        submitScore.setAttribute("type", "submit");
        submitScore.setAttribute("id", "submit");
        submitScore.innerHTML = "Submit";

        questionDisplay.appendChild(submitScore);

    //CAPTURE AND STORE TO LOCAL DATA
        submitScore.addEventListener("click", function () {
            
            var nameInput = scoreInput.value;

            if (nameInput === "") {
             displayMessage("No input detected. Please enter initials to submit score.");

            } else {
                var finalScore = {
                    initials: nameInput,
                    score: timeLeftCount
                }
                console.log(finalScore);
                localStorage.setItem("storedScores", JSON.stringify(finalScore));               
                window.location.replace("./scoreboard.html");
            }
    });
}






   
