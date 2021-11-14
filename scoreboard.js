//DECLARE VARIABLES
var scoreList = document.querySelector("#scoreList");
var resetScoreboard = document.querySelector("#reset");
var goBack = document.querySelector("#back");

//EVENT LISTENER TO CLEAR SCOREBOARD
resetScoreboard.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// GET LOCAL DATA
/*var scoreboard = localStorage.getItem("storedScores");
var unStringScore = JSON.parse(scoreboard);
console.log("saved scores " + scoreboard);

if (scoreboard !== null) {
        for (var i = 0; i < scoreboard.length; i++) {
            var scoreItem = document.createElement("li");
            scoreItem.textContent = unStringScore.initials + " : " + unStringScore.score
            scoreList.appendChild(scoreItem);
        }
} */

//EVENT LISTENER TO GO BACK TO INDEX HTML
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});