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
var scoreboard = [];
scoreboard = localStorage.getItem("scoreboard");

if (scoreboard !== null) {
        for (var i = 0; i < scoreboard.length; i++) {
            var scoreItem = document.createElement("li");
            scoreItem.textContent = scoreboard[i].initals + " " + scoreboard[i].score;
            scoreList.appendChild(scoreItem);
        }
}

//EVENT LISTENER TO GO BACK TO INDEX HTML
goBack.on("click", function () {
    window.location.replace("./index.html");
});