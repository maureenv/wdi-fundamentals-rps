////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput(){
    var answer=prompt("Please choose 'rock', 'paper', or 'scissors'");
    if (answer!=="rock" && answer!=="paper" && answer!=="scissors"){
        alert(answer + " is not rock, paper, or scissors");
        return getInput();
    } else {return answer;}
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

/*function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression ;
}

/*function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression ;
}*/

// The above code didn't help with the rock, paper, scissors game.

function getWinner(playerMove,computerMove) {
    var winner;

if (playerMove===computerMove){
    winner="neither!";
} //fisnish "tie" if statement 

else if (playerMove==="rock"){
    if (computerMove==="paper"){
        winner="computer";
    } else {winner="player"}
} // close else if "rock"

else if (playerMove==="paper"){
    if (computerMove==="rock"){
        winner= "player";
    } else {winner="computer"}
} // close else if "paper"

else if (playerMove==="scissors"){
    if (computerMove==="rock"){
        winner="computer";
    } else {winner="player"}
}
    return winner;
} // close getWinner function

function playToFive() {
    alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins<5 && computerWins<5){
        var players = getInput();
        var computers = randomPlay();
        var winner = getWinner(players, computers)
        alert("You played " + players + " and computer played " + computers);
        if( winner=="player"){
            playerWins++;
            alert("you win this round " + "you:" + playerWins + " computer:" + computerWins);
        } else if (winner=="computer") {
            computerWins++;
            alert("you lose! " + "you:" + playerWins + " computer:" + computerWins);
        }
    }

    if (playerWins > computerWins){
        alert("You Win!");
    } else {
        alert("Computer Wins!");
    }

}

playToFive();

