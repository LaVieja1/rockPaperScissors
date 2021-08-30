let playerScore = 0;
let computerScore = 0;
let computerSelection = computerPlay();

let playerSelection = "";

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gameOver() {
    if (playerScore >= 5) {
        let winPlayer = "Player won the game.";
        console.log(winPlayer);
        return winPlayer;
    } else if (computerScore >= 5) {
        let winComputer = "Computer won the game.";
        console.log(winComputer);
        return winComputer;
    }
}

function playRound() {
    let playerSelection = prompt("rock, paper or scissors")
    const computerSelection = computerPlay();
    console.log(playerScore, computerScore);

    if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        playerScore++;
        gameOver();
        return "You won the round.";
    } else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"
    ) {
        computerScore++;
        gameOver();
        return "Computer won the round.";
    } else {
        return "Tie."
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

console.log(playRound(playerSelection, computerSelection));