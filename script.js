var checkHighscores = document.querySelector(".highscores")
var mainEl = document.get
var timerEl = document.querySelector(".timer");
var timeLeft = 100;


function setTimer() {
    function startTimer() {
        preventDefault();
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
        clearInterval(timerInterval);
        }
    }
    var timerInterval = setInterval(startTimer, 1000);
}

document.getElementById("start").addEventListener("click", setTimer);

var stopTimer = setInterval(function () {
    if (timeLeft === 0) {
        clearInterval(stopTimer)
    }
}, 3000);