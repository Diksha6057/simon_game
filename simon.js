let buttonColors = ["red","blue","green","yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function(){

    if(!started){

        document.getElementById("level-title").innerText =
        "Level " + level;

        nextSequence();

        started = true;
    }

});

function nextSequence(){

    userClickedPattern = [];

    level++;

    document.getElementById("level-title").innerText =
    "Level " + level;

    let randomNumber = Math.floor(Math.random()*4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    animatePress(randomChosenColor);

}

document.querySelectorAll(".btn").forEach(function(button){

    button.addEventListener("click",function(){

        let userChosenColor = this.id;

        userClickedPattern.push(userChosenColor);

        animatePress(userChosenColor);

        checkAnswer(userClickedPattern.length-1);

    });

});

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

        if(userClickedPattern.length===gamePattern.length){

            setTimeout(function(){

                nextSequence();

            },1000);

        }

    }
    else{

        document.body.classList.add("game-over");

        setTimeout(function(){

            document.body.classList.remove("game-over");

        },200);

        document.getElementById("level-title").innerText =
        "Game Over, Press Any Key to Restart";

        startOver();

    }

}

function animatePress(color){

    let activeButton = document.getElementById(color);

    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");

    },150);

}

function startOver(){

    level = 0;

    gamePattern = [];

    started = false;

}