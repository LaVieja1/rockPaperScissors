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
        console.log("Player won the round")
        return "You won the round.";
    } else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"
    ) {
        computerScore++;
        gameOver();
        console.log("Computer won the round")
        return "Computer won the round.";
    } else {
        return "Tie."
    }
}

/*function game() {
    while (playerScore < 5 || computerScore < 5) {
        playRound();
    }
}
*/

function game () {
    while(playerScore <= 5 || computerScore <= 5) {
        playRound();
        if (playerScore === 5) {
            break;
        } else if (computerScore === 5) {
            break;
        }
    }
}

game();

console.log(playRound(playerSelection, computerSelection));