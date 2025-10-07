const choices = ["rock","paper","scissors"]

function game() {
    //play game
    //play 5 rounds
    //console based
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}