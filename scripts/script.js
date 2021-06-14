// Player & CPU selection
const playerSelection = 'Scissors'
const computerSelection = computerPlay();


// Function to generate random choice for CPU
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * 3 + 1)];
}


// Function to play one round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === "scissors") {
            return 'You Win! Rock beats Scissors.';
        } else if (computerSelection === "paper") {
            return 'You Lose! Paper beats Rock.';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === "rock") {
            return 'You Win! Paper beats Rock.';
        } else if (computerSelection === "scissors") {
            return 'You Lose! Scissors beats Paper.';
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === "paper") {
            return 'You Win! Scissors beats Paper.';
        } else if (computerSelection === "rock") {
            return 'You Lose! Rock beats Scisssors.';
        }
    }
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
}


// Function for game to play 5 rounds
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

}


console.log(playRound(playerSelection, computerSelection));